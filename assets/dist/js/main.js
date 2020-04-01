$(document).ready(function(){
    $( ".title" ).click(function() {
       $('.puncts').toggleClass('open-title');
       $('.all-all-puncts').stop().slideToggle(); 
    //    $('.back-dark').css('display','block'); 
    });

    $( ".menu" ).click(function() {
       $('nav').stop().toggleClass('open-nav');
       $('.back-dark').css('display','block'); 
    });
    $( ".click-open" ).click(function() {
       $('.chooice').stop().slideToggle();
    });
    $( ".close-nav" ).click(function() {
       $('nav').stop().removeClass('open-nav');
       $('.back-dark').css('display','none'); 
    });

    $( ".open-request-call" ).click(function() {
      $('.request-call').css('display','block');
      $('.back-dark').css('display','block'); 
      $('body').css('overflow','hidden'); 
   });
    $( ".open-thank" ).click(function() {
      $('.thank').css('display','block');
      $('.back-dark').css('display','block'); 
      $('body').css('overflow','hidden'); 
   });
    $( ".open-politic" ).click(function() {
      $('.politic').css('display','block');
      $('.back-dark').css('display','block'); 
      $('body').css('overflow','hidden'); 
   });
   $( ".cont-call" ).click(function(event) {
      event.preventDefault();
      var ph = $("#phone3").val();
      var nam = $("#name").val();
      console.log(nam);
      if((ph === "") || (nam === "")){
        alert('Заполните форму')
      }
      else{
         $('.request-call').css('display','none');
         $('.thank').css('display','block');
         $('.back-dark').css('display','block'); 
         $('body').css('overflow','hidden'); 
      }
   });
   document.addEventListener("click", function(e) {
      if (e.target.className=="open-contact-pop") {
       $('.contact-pop').css('display','block');
       $('.back-dark').css('display','block'); 
       $('body').css('overflow','hidden'); 
       $('.pop-slider').slick({
           infinite: true,
           arrows: true,
           slidesToShow: 1,
           slidesToScroll: 1,
           prevArrow: '<li class="prev-shema"><i class="icon-next"></i></li>',
           nextArrow: '<li class="next-shema"><i class="icon-next"></i></li>',
           dots: true,
           customPaging : function(slider, i) {
               var slidesCount = slider.slideCount;
               return '<a class="link">'+(i+1)+'<span>'+slidesCount+'</span></a>'
           },
           responsive: [
               {
                   breakpoint: 1024,
                   settings: {
                       arrows: false,
                   }
               },
               ]
         });
      }
    });

    $( ".back-dark" ).click(function() {
       $('nav').stop().removeClass('open-nav');
       $('.back-dark').css('display','none'); 
       $('.popUp').css('display','none'); 
       $('body').css('overflow','auto'); 
    });

    $( ".closePop" ).click(function() {
       $('.back-dark').css('display','none'); 
       $('.popUp').css('display','none'); 
       $('body').css('overflow','auto'); 
    });
    $( ".closeOnBut" ).click(function() {
       $('.back-dark').css('display','none'); 
       $('.popUp').css('display','none'); 
       $('body').css('overflow','auto'); 
    });

    $( ".go-contact" ).click(function() {
      var a = $(this).attr('data-adress');
      localStorage.setItem('myKey', a);
   });
});