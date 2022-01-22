const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const boxContainer = document.querySelector(".box-container");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modalTitle = document.querySelector(".modal-title");
const modalImg = document.querySelector(".modal-img");
const modalImgFooter = document.querySelector(".modal-img-footer");

const toggleMenu = function () {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMenu);

let clicked;

const openModal = function (e) {
  clicked = e.target.closest(".content");
  modalTitle.innerText = clicked.getElementsByTagName("h3")[0].innerText;
  modalImg.src = `./imagens/gallery-img-${clicked.dataset.img}.jpg`;

  if (clicked.dataset.old) {
    modalImgFooter.style.display = "block";
  }

  modal.classList.remove("scaledDown");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("scaledDown");
  overlay.classList.add("hidden");
  modalImgFooter.style.display = "none";
};

boxContainer.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

const changeToOld = function () {
  if (clicked.dataset.old) {
    modalImg.src = `./imagens/gallery-img-${clicked.dataset.img}-old.jpg`;
  }
};

const changeToNew = function () {
  if (clicked.dataset.old) {
    modalImg.src = `./imagens/gallery-img-${clicked.dataset.img}.jpg`;
  }
};

modalImg.addEventListener("mouseenter", changeToOld);
modalImg.addEventListener("mouseleave", changeToNew);
