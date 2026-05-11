const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const links = Array.from(document.querySelectorAll(".nav-link"));
const reveals = document.querySelectorAll(".reveal");
const sections = Array.from(document.querySelectorAll("main section[id]"));

function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navLinks.classList.toggle("open", open);
  header.classList.toggle("menu-open", open);
  document.body.classList.toggle("nav-open", open);
}

function setActiveLink(id) {
  links.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
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
});

window.addEventListener("scroll", syncHeader, { passive: true });
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
