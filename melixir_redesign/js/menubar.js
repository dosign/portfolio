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

  //오른쪽 슬라이드
  function right(n,i){
    if($(".img_list>li").is(":animated")){return false;}
    //animation 적용 중 일 때는 right함수 빠져 나가게 return false
    $(".img_list>li").eq(n).css("left","-100%").addClass("on").animate({"left":"0px"},600);
    $(".img_list>li").eq(i).animate({"left":"100%"},600,function(){
      $(this).removeClass("on").css("left","0px");
    });
    $(".dot_btn>li").removeClass("on").eq(n).addClass("on");
  }

  //왼쪽 슬라이드
  function left(n,i){
    if($(".img_list>li").is(":animated")){return false;}
    $(".img_list>li").eq(n).css("left","100%").addClass("on").animate({"left":"0px"},600);
    $(".img_list>li").eq(i).animate({"left":"-100%"},600,function(){
      $(this).removeClass("on").css("left","0px");
    });
    $(".dot").removeClass("on").eq(n).addClass("on");
  }

  //dot button
  $(".dot").click(function(){
    let th = $(this).attr("class");
    if(th == "dot"){ //class속성 값이 dot일 때
      let i = $(".dot.on").index(); //.dot에 .on이 추가된 순번을 변수i에 할당
      let n = $(this).index();
      if(i<n){
        left(n,i);
      }else if(i>n){
        right(n,i);
      }
    }
  });

  //자동 슬라이드
  let timer = setInterval(slide,3000);
  function slide(){
    let th = $(".img_list > li.on");
    let now = th.index();
    let next = th.next().index();
    if(next == -1){ next = 0; }
    //li.index 0,1,2 == true
    //0,1,2를 제외한 숫자는 -1로 나옴 (jquery에서 정한 공식)
    $(".img_list > li").eq(next).css("left","100%").addClass("on").animate({"left":"0px"},600);
    th.animate({"left":"-100%"},600,function(){
      $(this).removeClass("on").css("left","0px");
    });
    $(".dot").removeClass("on").eq(next).addClass("on");
  }

  //영역안에 커서 올려놓았을 때 자동슬라이드 멈춤
  $(".img_area,.dot_btn").hover(
    function(){ //mouseover
      clearInterval(timer); //자동슬라이드 끊기
    },function(){ //mouseout
      timer = setInterval(slide,3000); //다시 자동슬라이드 생성
    }
  )

});
