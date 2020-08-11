$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $('.svg-1').css("visibility","visible");
      $('.svg-1').css("position","absolute");
      $('.svg-1').css("z-index","1000000");
    }
});