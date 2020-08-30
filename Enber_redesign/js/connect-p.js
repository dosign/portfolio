$(document).ready(function(){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop(); //스크롤 이동값을 변수scroll에 할당
    let aboutTop = $("#connect").offset().top-1; 
    if(scroll > aboutTop){
      $(".con_product").addClass("on");
    }else{
      $(".con_product").removeClass("on");
    }
  });
});
