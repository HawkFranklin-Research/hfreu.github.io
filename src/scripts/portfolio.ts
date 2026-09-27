const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- Card reveal on scroll ---- */

const cards = document.querySelectorAll<HTMLElement>(".p-card");
if (reduceMotion) {
  cards.forEach((card) => card.classList.add("is-visible"));
} else {
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          window.setTimeout(() => {
            el.style.transition = "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, (i % 5) * 90);
          cardObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
  );
  cards.forEach((card) => cardObserver.observe(card));
}

/* ---- Chapter accent wash + rail nav active state ---- */

const chapters = document.querySelectorAll<HTMLElement>("[data-chapter]");
const railButtons = document.querySelectorAll<HTMLButtonElement>("[data-rail-target]");

const chapterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        el.classList.add("is-active");
        railButtons.forEach((btn) => {
          btn.classList.toggle("is-active", btn.dataset.railTarget === el.id);
        });
      } else {
        el.classList.remove("is-active");
      }
    });
  },
  { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
);
chapters.forEach((chapter) => chapterObserver.observe(chapter));

railButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.railTarget ?? "")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ---- Ambient video: play only in view, scrub to a random segment periodically ---- */

type VideoState = { timer?: number; segmentEnd?: number };
const videoState = new WeakMap<HTMLVideoElement, VideoState>();
const SEGMENT_SECONDS = 5.5;

function scrubToRandomSegment(video: HTMLVideoElement) {
  const duration = video.duration;
  if (!duration || Number.isNaN(duration)) return;
  const maxStart = Math.max(0, duration - SEGMENT_SECONDS - 0.5);
  const start = Math.random() * maxStart;
  video.currentTime = start;
  const state = videoState.get(video) ?? {};
  state.segmentEnd = start + SEGMENT_SECONDS;
  videoState.set(video, state);
}

function ambientLoop(video: HTMLVideoElement) {
  const state = videoState.get(video) ?? {};
  if (video.currentTime >= (state.segmentEnd ?? Infinity)) {
    scrubToRandomSegment(video);
  }
  state.timer = window.requestAnimationFrame(() => ambientLoop(video));
  videoState.set(video, state);
}

function startAmbient(video: HTMLVideoElement) {
  if (reduceMotion) return;
  const begin = () => {
    scrubToRandomSegment(video);
    video.play().catch(() => {});
    ambientLoop(video);
  };
  if (video.readyState >= 1) begin();
  else video.addEventListener("loadedmetadata", begin, { once: true });
}

function stopAmbient(video: HTMLVideoElement) {
  video.pause();
  const state = videoState.get(video);
  if (state?.timer) window.cancelAnimationFrame(state.timer);
}

const ambientVideos = document.querySelectorAll<HTMLVideoElement>("[data-random-video]");
const videoVisibility = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) startAmbient(video);
      else stopAmbient(video);
    });
  },
  { threshold: 0.4 }
);
ambientVideos.forEach((video) => videoVisibility.observe(video));

/* ---- Click-to-expand modal ---- */

const modal = document.querySelector<HTMLElement>("[data-video-modal]");
const modalVideo = modal?.querySelector("video");
const modalClose = modal?.querySelector("[data-modal-close]");

function openModal(src: string) {
  if (!modal || !modalVideo) return;
  modalVideo.setAttribute("src", src);
  modal.classList.add("is-open");
  modalVideo.currentTime = 0;
  modalVideo.muted = false;
  modalVideo.play().catch(() => {});
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal || !modalVideo) return;
  modal.classList.remove("is-open");
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  document.body.style.overflow = "";
}

document.querySelectorAll<HTMLElement>("[data-video-card]").forEach((card) => {
  card.addEventListener("click", () => {
    const src = card.dataset.expandSrc;
    if (src) openModal(src);
  });
});

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ---- Carousel auto-advance ---- */

document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll<HTMLElement>("[data-slide]"));
  const dots = Array.from(carousel.querySelectorAll<HTMLElement>(".p-carousel-dots span"));
  if (slides.length < 2) return;
  let active = 0;
  dots[0]?.classList.add("is-active");
  let interval: number | undefined;

  const advance = () => {
    slides[active].style.opacity = "0";
    active = (active + 1) % slides.length;
    slides[active].style.opacity = "1";
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === active));
  };

  const start = () => {
    if (reduceMotion || interval) return;
    interval = window.setInterval(advance, 2800);
  };
  const stop = () => {
    if (interval) window.clearInterval(interval);
    interval = undefined;
  };

  const visibility = new IntersectionObserver(
    (entries) => entries.forEach((entry) => (entry.isIntersecting ? start() : stop())),
    { threshold: 0.4 }
  );
  visibility.observe(carousel);
  carousel.addEventListener("pointerenter", stop);
  carousel.addEventListener("pointerleave", start);
});

/* ---- ProbX ticker cycle ---- */

document.querySelectorAll<HTMLElement>("[data-ticker]").forEach((ticker) => {
  const rows = Array.from(ticker.querySelectorAll<HTMLElement>("[data-ticker-row]"));
  if (rows.length < 2 || reduceMotion) return;
  let active = 0;
  let interval: number | undefined;

  const advance = () => {
    rows[active].style.opacity = "0.28";
    active = (active + 1) % rows.length;
    rows[active].style.opacity = "1";
  };

  const visibility = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting && !interval) interval = window.setInterval(advance, 2200);
        else if (!entry.isIntersecting && interval) {
          window.clearInterval(interval);
          interval = undefined;
        }
      }),
    { threshold: 0.4 }
  );
  visibility.observe(ticker);
});
