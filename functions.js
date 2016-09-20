
  /* -- #globalnavi.js -- */
  
  $(function($) {
    
  var nav    = $('#fixedBox'),
      offset = nav.offset();
    
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
  });
    
  });

  /* -- #slideshow.js -- */

$(document).ready(function(){
  var wwidth = $(window).width();
  if(wwidth >= 1000){
    $("#slider img").attr({width: "100%"});
  }else{
    $("#slider img").attr({width: "1000px"});
  }
});
$(window).resize(function(){
  var wwidth = $(window).width();
  if(wwidth >= 1000){
    $("#slider img").attr({width: "100%"});
    }else{
    $("#slider img").attr({width: "1000px"});
  }
});


$(function(){
    var setImg = '#slider';
    var fadeSpeed = 1000;
    var switchDelay = 3500;
 
    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);
 
    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});