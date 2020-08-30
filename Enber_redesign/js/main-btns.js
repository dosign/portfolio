$(document).ready(function(){
  //prev button
  $(".prev").click(function(){
    let last = $(".cont_list >div:last");
    $(".cont_list").prepend(last);
  });

  //next button
  $(".next").click(function(){
    let first = $(".cont_list >div:first");
    $(".cont_list").append(first);
  });
}); //document.ready
