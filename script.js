/* Main JS: GSAP animations, ScrollTrigger, theme toggle, and a11y helpers */

/* Safety: ensure GSAP exists */
if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
  console.error("GSAP or ScrollTrigger missing. Check CDN imports.");
}

/* Register plugin */
gsap.registerPlugin(ScrollTrigger);

/* Page load animations for hero */
window.addEventListener("load", () => {
  const heroImg = document.querySelector(".profile-photo");
  const heroTitle = document.querySelector(".hero-title");
  const heroDesc = document.querySelector(".hero-desc");
  const heroBtns = document.querySelectorAll(".hero-actions .btn");

  const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } });
  tl.from(heroImg, { x: -120, opacity: 0 })
    .from(heroTitle, { x: 80, opacity: 0 }, "-=0.6")
    .from(heroDesc, { y: 20, opacity: 0 }, "-=0.45")
    .from(heroBtns, { y: 20, opacity: 0, stagger: 0.12 }, "-=0.4");
});

/* Scroll-triggered reveals for sections */
document.querySelectorAll(".section").forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
});

/* Staggered project card reveal */
gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: i * 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

/* Theme toggle (dark <-> light) */
const themeToggle = document.getElementById("themeToggle");
function setTheme(isLight) {
  document.body.classList.toggle("theme-light", isLight);
  document.body.classList.toggle("theme-dark", !isLight);
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("prefersLight", isLight ? "1" : "0");
}
/* Initialize from localStorage (if present) or system pref */
const stored = localStorage.getItem("prefersLight");
if (stored !== null) {
  setTheme(stored === "1");
} else {
  const preferLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(preferLight);
}
themeToggle.addEventListener("click", () => setTheme(!document.body.classList.contains("theme-light")));

/* Simple smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* Small accessibility improvement: focus outlines for keyboard users */
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab") document.body.classList.add("show-focus-outlines");
});
