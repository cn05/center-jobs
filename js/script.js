document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("hamburger-active");
    mobileMenu.classList.toggle("hidden");
  });
});
