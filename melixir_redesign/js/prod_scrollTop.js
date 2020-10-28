$(document).ready(function(){
  $(window).scroll(function(){ //window에서 스크롤이벤트가 발생했을 때
    let a = $(window).scrollTop(); //현재 스크롤 이동거리를 변수a에 할당 (== window.scrollY)
    if(a>100){
      $(".top_btn").css("display","block");
    }else{
      $(".top_btn").css("display","none");
    }
  });
  
  /*
  $(".sect_wrap").scroll(function(){
        var scrollTop = $(this).scrollTop();
        var innerHeight = $(this).innerHeight();
        var scrollHeight = $(this).prop('scrollHeight');

        if (scrollTop + innerHeight >= scrollHeight) {
        $(".top_btn").css("display","block");
        } else {
        $(".top_btn").css("display","none");
        }
  });
  */

  $(".top_btn").click(function(){
    $("html,body").animate({"scrollTop":"0px"},500); //페이지 상단으로 이동하도록 animate효과 적용
  });
});



