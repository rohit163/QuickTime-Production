$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      // $('.svg-1').css("visibility","visible");
      $('.svg-1').css("display","block");
      $('.svg-1').css("position","fixed");
      $('.svg-1').css("z-index","1000000");
    }else{
      // $('.svg-1').css("visibility","hidden");
      $('.svg-1').css("display","none");
      $('.svg-1').css("position","");
      $('.svg-1').css("z-index","");
    }
});