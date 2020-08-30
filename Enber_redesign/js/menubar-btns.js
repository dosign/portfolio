$(document).ready(function(){
  $(".gnb button").click(function(){
    $(".menubar_list").css("display","block");
  });
  $(".close").click(function(){
    $(".menubar_list").css("display","none");
  });
});
