import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
root.classList.add("motion-ready");

const header = document.querySelector<HTMLElement>("[data-header]");
const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const mobileMenu = document.querySelector<HTMLElement>("#mobile-menu");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  if (mobileMenu) mobileMenu.hidden = open;
  document.body.classList.toggle("menu-open", !open);
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    if (mobileMenu) mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
  });
});

const updateFrame = () => {
  const y = window.scrollY;
  header?.classList.toggle("is-scrolled", y > 28);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? y / max : 0;
  const meter = document.querySelector<HTMLElement>("[data-scroll-meter]");
  if (meter) meter.style.transform = `scaleX(${progress})`;
};

window.addEventListener("scroll", updateFrame, { passive: true });
updateFrame();

if (!reduceMotion) {
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.7 })
    .from(".hero h1 > * , .hero h1", { y: 48, opacity: 0, duration: 1 }, "-=0.35")
    .from(".hero-lede", { y: 28, opacity: 0, duration: 0.75 }, "-=0.55")
    .from(".hero-actions", { y: 22, opacity: 0, duration: 0.65 }, "-=0.45")
    .from(".emblem-plate", { scale: 0.74, opacity: 0, rotate: -5, duration: 1.25 }, "-=1")
    .from(".orbit-line, .orbit-ring, .orbit-label", { opacity: 0, scale: 0.88, duration: 1 }, "-=0.8");

  gsap.to(".hero-orbit", {
    yPercent: 16,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
  });

  gsap.utils.toArray<HTMLElement>(".section-heading, .capabilities-intro, .network-heading, .contact-copy").forEach((element) => {
    gsap.from(element.children, {
      y: 42,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 78%", once: true }
    });
  });

  gsap.to("[data-route-progress]", {
    ...(window.matchMedia("(max-width: 900px)").matches ? { scaleY: 1 } : { scaleX: 1 }),
    ease: "none",
    scrollTrigger: {
      trigger: "[data-route]",
      start: "top 72%",
      end: "bottom 52%",
      scrub: 0.5
    }
  });

  gsap.from(".route-stage", {
    y: 38,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: { trigger: ".route", start: "top 72%", once: true }
  });

  gsap.from(".capability-card", {
    y: 70,
    opacity: 0,
    rotateX: 7,
    duration: 0.9,
    stagger: 0.14,
    ease: "power3.out",
    scrollTrigger: { trigger: ".capability-list", start: "top 78%", once: true }
  });

  const media = gsap.matchMedia();
  media.add("(min-width: 961px)", () => {
    const track = document.querySelector<HTMLElement>("[data-venture-track]");
    const pin = document.querySelector<HTMLElement>("[data-ventures-pin]");
    if (!track || !pin) return;

    const travel = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
    const tween = gsap.to(track, {
      x: () => -travel(),
      ease: "none",
      scrollTrigger: {
        trigger: pin,
        start: "top top",
        end: () => `+=${travel() + 720}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true
      }
    });
    return () => tween.kill();
  });

  gsap.from(".sapaki-copy > *, .sapaki-system", {
    y: 52,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: { trigger: ".sapaki-panel", start: "top 75%", once: true }
  });

  const networkPath = document.querySelector<SVGPathElement>("[data-network-path]");
  if (networkPath) {
    const length = networkPath.getTotalLength();
    networkPath.style.strokeDasharray = `${length}`;
    networkPath.style.strokeDashoffset = `${length}`;
    gsap.to(networkPath, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: { trigger: ".network-map", start: "top 72%", end: "center 48%", scrub: 0.7 }
    });
  }

  gsap.from(".network-office, .network-bridge", {
    y: 46,
    opacity: 0,
    duration: 0.9,
    stagger: 0.16,
    ease: "power3.out",
    scrollTrigger: { trigger: ".network-map", start: "top 70%", once: true }
  });

  document.querySelectorAll<HTMLElement>(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const box = element.getBoundingClientRect();
      const x = event.clientX - box.left - box.width / 2;
      const y = event.clientY - box.top - box.height / 2;
      gsap.to(element, { x: x * 0.08, y: y * 0.12, duration: 0.35, ease: "power2.out" });
    });
    element.addEventListener("pointerleave", () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.35)" });
    });
  });
}

window.addEventListener("load", () => ScrollTrigger.refresh());
