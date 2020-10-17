$(document).ready(function(){

  //menubar toggle
  $(".menubar").click(function(){
    let top = $(".menu_list").css("top");
    if(top != "0px"){
      $(".menu_list").addClass("on").stop().animate({"top":"0"},500);
      $(".menubar").addClass("change");
    }else{
      $(".menu_list").stop().animate({"top":"100%"},500,function(){
        $(this).removeClass("on");
      });
      $(".menubar").removeClass("change");
    }
  });
});