$(document).ready(function(){
  //products more button
  $(".more").click(function(){
    $(".prod_area").stop().animate({"opacity":"0"},500,function(){
      $(this).css("height","auto").animate({"opacity":"1"});
    });
  });
});
