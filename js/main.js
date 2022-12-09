$(".slide_img").slick({
  arrows: true,
  dots: false,
  autoplay: false,
  slidesToShow: 5,
});

$(".slidePicture .arrows .prev").on("click", function () {
  $(".slide_img").slick("slickPrev");
});
$(".slidePicture .arrows .next").on("click", function () {
  $(".slide_img").slick("slickNext");
});
