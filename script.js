const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const links = Array.from(document.querySelectorAll(".nav-link"));
const navIndicator = navLinks?.querySelector(".nav-indicator");
const reveals = document.querySelectorAll(".reveal");
const sections = Array.from(document.querySelectorAll("main section[id]"));
function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navLinks.classList.toggle("open", open);
  header.classList.toggle("menu-open", open);
  document.body.classList.toggle("nav-open", open);
}
function placeNavIndicator(activeLink, animate = true) {
  if (!navIndicator || !activeLink) return;
  navIndicator.style.width = `${activeLink.offsetWidth}px`;
  navIndicator.style.height = `${activeLink.offsetHeight}px`;
  navIndicator.style.transform = `translate(${activeLink.offsetLeft}px, ${activeLink.offsetTop}px)`;
  if (animate) {
    navIndicator.classList.remove("no-transition");
  } else {
    navIndicator.classList.add("no-transition");
  }
  requestAnimationFrame(() => navLinks.classList.add("has-indicator"));
}
function moveNavIndicator(activeLink) {
  if (!navIndicator || !activeLink) return;
  const previousHref = sessionStorage.getItem("lastNavHref");
  const previousLink = previousHref
    ? links.find((link) => link.getAttribute("href") === previousHref)
    : null;
  if (previousLink && previousLink !== activeLink) {
    placeNavIndicator(previousLink, false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => placeNavIndicator(activeLink, true));
    });
    sessionStorage.removeItem("lastNavHref");
    return;
  }
  placeNavIndicator(activeLink, true);
}
function setActiveLink(id) {
  let activeLink = document.querySelector(".nav-link.active");
  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const active = href === `#${id}`;
    if (!href.startsWith("#")) return;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
      activeLink = link;
    } else {
      link.removeAttribute("aria-current");
    }
  });
  moveNavIndicator(activeLink);
}
function syncHeader() {
  const hasRouteLayout = Boolean(document.querySelector(".route-main"));
  header.classList.toggle("scrolled", hasRouteLayout || window.scrollY > 12);
}
if (navToggle && navLinks && header) {
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) {
      sessionStorage.setItem("lastNavHref", document.querySelector(".nav-link.active")?.getAttribute("href") || "");
    }
    const targetId = href.startsWith("#") ? href.slice(1) : "";
    if (targetId) {
      setActiveLink(targetId);
    }
    setMenu(false);
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 920) {
    setMenu(false);
  }
  setActiveLink(document.querySelector(".nav-link.active")?.getAttribute("href")?.slice(1) || "home");
});
window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("load", () => {
  setActiveLink(document.querySelector(".nav-link.active")?.getAttribute("href")?.slice(1) || "home");
});
syncHeader();
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});


// Scroll effects: progress bar, reveal cascade, soft parallax, float-in cards
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
progressBar.setAttribute("aria-hidden", "true");
document.body.appendChild(progressBar);

const autoRevealSelectors = [
  ".value-item", ".product-card", ".process-list > div", ".cook-card",
  ".partner-card", ".machine-card", ".timeline-item", ".feature-card",
  ".product-detail-card", ".section-heading", ".image-frame"
];
document.querySelectorAll(autoRevealSelectors.join(",")).forEach((el, index) => {
  if (!el.classList.contains("reveal")) el.classList.add("reveal", "reveal-auto");
  el.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
});

const floatTargets = document.querySelectorAll(".product-card, .value-item, .cook-card, .machine-card, .partner-card, .image-frame");
floatTargets.forEach((el) => el.classList.add("scroll-float"));

function updateScrollEffects() {
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(window.scrollY / max, 1);
  progressBar.style.transform = `scaleX(${progress})`;
  document.documentElement.style.setProperty("--scroll", progress.toFixed(4));

  if (!reduceMotion) {
    document.querySelectorAll(".hero, .route-hero").forEach((el) => {
      el.style.setProperty("--parallax-y", `${window.scrollY * 0.16}px`);
    });
  }
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateScrollEffects();
    ticking = false;
  });
}, { passive: true });
window.addEventListener("resize", updateScrollEffects);
window.addEventListener("load", updateScrollEffects);
updateScrollEffects();

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { threshold: 0.45, rootMargin: "-25% 0px -45% 0px" }
);
sections.forEach((section) => sectionObserver.observe(section));
if (links.some((link) => (link.getAttribute("href") || "").startsWith("#")) && sections.length) {
  setActiveLink("home");
} else {
  moveNavIndicator(document.querySelector(".nav-link.active"));
}
