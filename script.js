const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const links = Array.from(document.querySelectorAll(".nav-link"));
const navIndicator = navLinks.querySelector(".nav-indicator");
const reveals = document.querySelectorAll(".reveal");
const sections = Array.from(document.querySelectorAll("main section[id]"));

function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navLinks.classList.toggle("open", open);
  header.classList.toggle("menu-open", open);
  document.body.classList.toggle("nav-open", open);
}

function moveNavIndicator(activeLink) {
  if (!navIndicator || !activeLink) return;

  const linkRect = activeLink.getBoundingClientRect();
  const navRect = navLinks.getBoundingClientRect();
  const styles = getComputedStyle(navLinks);
  const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
  const paddingTop = Number.parseFloat(styles.paddingTop) || 0;

  navLinks.classList.add("has-indicator");
  navIndicator.style.width = `${linkRect.width}px`;
  navIndicator.style.height = `${linkRect.height}px`;
  navIndicator.style.transform = `translate(${linkRect.left - navRect.left - paddingLeft}px, ${linkRect.top - navRect.top - paddingTop}px)`;
  navIndicator.offsetHeight;
}

function setActiveLink(id) {
  let activeLink = null;

  links.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
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
  header.classList.toggle("scrolled", window.scrollY > 12);
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

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

reveals.forEach((element) => revealObserver.observe(element));

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
setActiveLink("home");
