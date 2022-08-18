
$(document).ready(function () {
  $(".more-text").hide();
  $(document).on("click", ".read-more-btn", function () {
    var moreLessButton = $(".more-text").is(":visible")
      ? "আরও দেখুন"
      : "অল্প দেখুন";
    $(this).text(moreLessButton);
    $(this).parent(".specialty-info-box").find(".more-text").toggle();
    $(this).parent(".specialty-info-box").find(".text-line").toggle();
  });
});


var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  coverflowEffect: {
      rotate: 50,
      stretch:0,
      depth: 60,
      modifier: 1,
      slideShadows: true,
  },
  autoplay: {
      delay: 3000,
  },
  pagination: {
        el: ".swiper-pagination",
      },
});








// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//     loop:true,
//     speed:500,
//     autoplay:{
//       delay:1000
//     }
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

