/*
const choice = document.querySelector(".choice input");
choice.addEventListener("click",function(){
  const cont_wrap = document.querySelector(".cont_wrap");
  cont_wrap.classList.toggle("on");
})
*/

$(document).ready(function(){
  $(".btns >button").click(function(){
    $(".btns >button").removeClass("on"); //.on을 몽땅 제거 시킨 후
    $(this).addClass("on");

    let i = $(this).index(); //지금 클릭한 버튼의 순번을 변수i에 할당

    $(".cont_wrap >.cont").css("display","none");
    $(".cont_wrap >.cont").eq(i).css("display","flex"); //클릭한 버튼과 동일한 .cont의 순번을 보여주게 함 
  });
});
