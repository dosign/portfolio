$(document).ready(function(){
  $(window).scroll(function(){
    let num = $(window).scrollTop();
    if(num > 0 && num <= 150){
      $(".prod_img").css("top","50px");
    }else if(num > 150 && num <= 1350){
      $(".prod_img").css("top",num+"px");
    }else if(num > 1350){
      $(".prod_img").css("top","1350px");
    }
  });
});
