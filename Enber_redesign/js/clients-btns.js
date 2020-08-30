//eventhandler : 연달아 클릭시 원활하게 이벤트 발생시키기 위해
let eventhandler = true;
  $(document).ready(function(){
    $(".clients_list >.prev").click(function(){
      if(eventhandler == true){ //현재는 true인 상태
        eventhandler = false;
        //false로 재할당 되면서 밑에 코드가 실행되는동안 재클릭시 중복으로 클릭이벤트 실행x
        //if조건문이 성립되고 난 뒤 if문 안에서 false가 된것이기 때문에 if문 빠져나가지 않음

        let last = $(".img_wrap .img_list:last");
        $(".img_area").prepend(last).css("left","-520px");
        $(".img_area").animate({"left":"0px"},500,function(){
          eventhandler = true;
          //콜백함수로 eventhandler를 다시 true로 만들어줘서 if문 반복시켜줌
        });
      }
    });
    $(".clients_list >.next").click(function(){
      let first = $(".img_wrap .img_list:first");
      //stop()함수로 이벤트 실행을 한 번씩 끊어주게 하여 원활하게 이벤트 실행
      $(".img_area").stop().animate({"left":"-520px"},500,function(){
        $(this).append(first).css("left","0px");
      });
    });
  });
