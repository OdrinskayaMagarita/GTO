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
    $( ".back-dark" ).click(function() {
       $('nav').stop().removeClass('open-nav');
       $('.back-dark').css('display','none'); 
    });
});