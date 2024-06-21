upButton = document.getElementById("top");

onscroll = () => {
  hScroll = document.documentElement.scrollTop;
  visibilityPoint = 200;
  upButton.style.opacity = +(hScroll > visibilityPoint);
};
