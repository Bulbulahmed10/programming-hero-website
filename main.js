$(".home-slider").owlCarousel({
  items: 1,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1500,
  loop: true,
});

$(".slider-2").owlCarousel({
  items: 1,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1500,
  loop: true,
});

window.addEventListener("scroll", function () {
  let menuArea = document.getElementsByClassName("menu-area");

  if (window.pageYOffset > 0) {
    menuArea.classList.add("cus-nav");
  } else {
    menuArea.classList.remove("cus-nav");
  }
});
