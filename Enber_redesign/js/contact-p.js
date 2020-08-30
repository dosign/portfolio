$(document).ready(function(){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop(); //스크롤 이동값을 변수scroll에 할당
    let aboutTop = $("#contact").offset().top-1;
    if(scroll > aboutTop){
      $(".contact_us").addClass("on");
    }else{
      $(".contact_us").removeClass("on");
    }
  });
});
