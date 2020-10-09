//sectMain content 슬라이드
$(document).ready(function(){
  $(".btn_prev >button").click(function(){
     let last = $(".cont_list >div:last");
     $(".cont_list").prepend(last);
  });
   $(".btn_next >button").click(function(){
      let first = $(".cont_list >div:first");
     $(".cont_list").append(first);
   });
});