$(document).ready(function(){
  //prev button
  $(".prev").click(function(){
    let last = $(".tech_list >.list:last");
    $(".list").removeClass("on");
    $(".tech_list").prepend(last);
    $(last).addClass("on");
  });

  //next button
  $(".next").click(function(){
    let first = $(".tech_list >.list:first");
    $(".tech_list").append(first);
    $(".list").removeClass("on");
    $(first).addClass("on");
  });
}); //document.ready