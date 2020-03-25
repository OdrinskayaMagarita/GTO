  $(document).ready(function(){
    $('.all-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner'),
        dots: true,
        fade: true,
        cssEase: 'linear',
        speed: 200,
      });
      $(".slick-dots li button").empty();

      // $("#phone1").mask("+7(123) 456-78-90");

});