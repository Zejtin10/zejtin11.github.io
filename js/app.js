$(function() {   
 $('.slide').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1000,
  });
});

var card4 = $('.card-4').children();

var cardh1 = document.querySelector('.card-8-h1');
var cardp = document.querySelector('.card-8-p');
var card8 = document.querySelector('.card-8');

$('.card-8').hover(function() {
     $('.card-8-p',this).toggleClass('on-hover');
    $('.card-8-h1',this).toggleClass('on-hover-h1');
});


var card4h1 = document.querySelectorAll('.card-4-h1');
var card4p = document.querySelector('.card-4-p');

$('.card-4').hover(function(){
    $('.card-4-p', this).toggleClass('on-hover');
    $('.card-4-h1', this).toggleClass('on-hover-h1');
    
})



//$(".burger-nav").click(function(){
//    $(".responsive").hide(1000);
//});

$(".burger-nav").click(function(){
    $(".responsive").animate({
        height: 'toggle'
    });
},); 










