  $(document).ready(function(){
    $('.all-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner'),
        dots: true,
      });
      $(".slick-dots li button").empty();
});