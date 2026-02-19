// Mobile nav toggle + reveal on scroll
const navToggle = document.querySelector(".nav-toggle");
const navMenuMobile = document.querySelector(".nav-menu-mobile");

if (navToggle && navMenuMobile) {
  navToggle.addEventListener("click", () => {
    const isHidden = navMenuMobile.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", String(!isHidden));
  });
}

const revealItems = document.querySelectorAll(".reveal");

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealOnScroll.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealOnScroll.observe(item));
