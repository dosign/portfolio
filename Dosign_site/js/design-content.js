$(document).ready(function(){
  let selectedClass = "";
  $(".btn").click(function(){
    selectedClass = $(this).attr("data-rel");
    //클릭한 버튼요소의 data-rel 속성값을 변수에 할당
    $(".content").fadeTo(100,0.1);
    //fadeTo(변경시간,투명도)
    $(".content >div").not("."+selectedClass).fadeOut().removeClass("cont");
    //변수에 담긴 data-rel속성값을 제외하고 나머지는 화면에서 제거, scale-cont 클래스도 제거
    setTimeout(function(){
      $("."+selectedClass).fadeIn().addClass("cont");
      $(".content").fadeTo(300,1);
    },300);
    //0.3초 뒤 함수를 한 번만 실행

  });
});