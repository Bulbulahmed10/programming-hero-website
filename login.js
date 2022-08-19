// var swiper = new Swiper('.login-swiper', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 1,
//   loop: true,
//   coverflowEffect: {
//       rotate: 40,
//       stretch:0,
//       depth: 60,
//       modifier: 1,
//       slideShadows: true,
//   },
//   autoplay: {
//       delay: 3000,
//   },
// });

var swiper = new Swiper(".login-swiper", {
  grabCursor:true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
          delay: 3000,
       },
});