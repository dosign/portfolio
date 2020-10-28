//sectMain content 슬라이드
$(document).ready(function(){
  $(".btn >button.prev").click(function(){
     let last = $(".cont_list >div:last");
     $(".cont_list").prepend(last);
  });
   $(".btn >button.next").click(function(){
      let first = $(".cont_list >div:first");
     $(".cont_list").append(first);
   });
});
