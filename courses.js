// const readMoreBtn = document.querySelector(".read-more-btn");
// const text = document.querySelector(".text-line");

// readMoreBtn.addEventListener("click", (e) => {
//   text.classList.toggle("show-more");
//   if (readMoreBtn.innerText === "আরও দেখুন") {
//     readMoreBtn.innerText = "অল্প দেখুন";
//   } else {
//     readMoreBtn.innerText = "আরও দেখুন";
//   }
// });

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




