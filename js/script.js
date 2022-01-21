const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

const toggleMenu = function () {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMenu);
