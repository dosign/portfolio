$(document).ready(function(){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop(); //스크롤 이동값을 변수scroll에 할당
    let aboutTop = $(".intro_area").offset().top;
    if(scroll > aboutTop){
      $(".company_intro").addClass("on");
      $(".intro_box").addClass("on");
    }else{
      $(".company_intro").removeClass("on");
      $(".intro_box").removeClass("on");
    }
  });
});
