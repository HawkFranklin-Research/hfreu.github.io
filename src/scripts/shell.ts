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
