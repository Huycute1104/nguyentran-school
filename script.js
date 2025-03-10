// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle functionality
const createMobileMenu = () => {
  const nav = document.querySelector(".nav-links");
  const burger = document.createElement("div");
  burger.className = "mobile-menu-toggle";
  burger.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector("nav").appendChild(burger);

  burger.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
};

// Initialize mobile menu when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createMobileMenu();
});
