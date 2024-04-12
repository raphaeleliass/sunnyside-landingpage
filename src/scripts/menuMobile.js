const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const menuMobile = document.getElementById("menu-mobile");
const btnContact = document.getElementById("btn-contact");

function toggleMenu() {
  menuMobile.classList.toggle("menu-mobile");
  menuMobile.classList.toggle("menu-mobile-active");
}

btnMenu.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
btnContact.addEventListener("click", toggleMenu);
