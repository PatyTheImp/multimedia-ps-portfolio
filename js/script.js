const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const boxContainer = document.querySelector(".box-container");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modalTitle = document.querySelector(".modal-title");
const modalImg = document.querySelector(".modal-img");

const toggleMenu = function () {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMenu);

const openModal = function (e) {
  const clicked = e.target.closest(".content");
  modalTitle.innerHTML = clicked.dataset.title;
  modalImg.src = `./imagens/gallery-img-${clicked.dataset.img}.jpg`;
  modal.classList.remove("scaledDown");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("scaledDown");
  overlay.classList.add("hidden");
};

boxContainer.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);
