upButton = document.getElementById("top");

function upButtonVisibility() {
  hScroll = document.body.scrollTop || document.documentElement.scrollTop;
  visibilityPoint = 200;
  console.log(hScroll);

  if (hScroll > visibilityPoint) {
    upButton.style.opacity = 1;
  } else {
    upButton.style.opacity = 0;
  }
}

setInterval(upButtonVisibility, 200);
