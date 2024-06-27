let headerMenu = document.getElementById("menu");
let burgerMenuButton = document.getElementById("bm-button");
let isOpen = false;

function toogleMenu() {
  headerMenu.style.top = document.getElementById("header").offsetHeight + "px";
  if (!isOpen) {
    headerMenu.style.right = "0px";
    isOpen = true;
  } else {
    headerMenu.style.right = "-200px";
    isOpen = false;
  }
}

function initButton(button) {
  button.setAttribute("onclick", "toogleMenu()");
}

onload = initButton(burgerMenuButton);
