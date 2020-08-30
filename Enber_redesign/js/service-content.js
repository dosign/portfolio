$(document).ready(function(){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop(); //스크롤 이동값을 변수scroll에 할당
    let aboutTop = $(".cost_area").offset().top-1;
    if(scroll > aboutTop){
      $(".cost_list").addClass("on");
    }else{
      $(".cost_list").removeClass("on");
    }

    let aboutTop2 = $(".sistem_area").offset().top-1;
    if(scroll > aboutTop2){
      $(".sistem_list").addClass("on");
    }else{
      $(".sistem_list").removeClass("on");
    }

    let aboutTop3 = $(".management_area").offset().top-1;
    if(scroll > aboutTop3){
      $(".management_list").addClass("on");
    }else{
      $(".management_list").removeClass("on");
    }

    let aboutTop4 = $(".benefit_area").offset().top-1;
    if(scroll > aboutTop4){
      $(".benefit_list").addClass("on");
    }else{
      $(".benefit_list").removeClass("on");
    }
  });

});
