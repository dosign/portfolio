$(document).ready(function(){
  let scrollEvent = true;
  let delta; //마우스 휠 이벤트가 발생했을 때 반환되는 값을 담기 위한 변수
  let secMax = $("section").length-1; //length는 1부터 시작, index는 0부터 시작
  let count = 0; //마우스 휠 이벤트가 발생 중인 section요소의 순번
  //다른 브라우저에서는 마우스 휠 이벤트가 위(150) 아래(-150)값을 반환하는데
  //파이어폭스는 위(3) 아래(-3)을 반환하기 때문에

  $("body").on("mousewheel DOMMouseScroll",function(e){
    e.stopPropagation();
    //기본적인 마우스휠 이벤트를 제거
    //e.preventDefault(); -> e.stopPropagation();
    //e.preventDefault()는 이벤트 외 별도의 브라우저 행동을 막기 위함
    //e.stopPropagation()는 이벤트가 상위 엘리먼트(부모)에 전달되지 않도록 전파 중지

    let E = e.originalEvent;
    if(E.detail){ //파이어폭스 용
      delta = e.detail*-50; //동일하게 값 150을 주기 위해
    }else{ //그 외 브라우저 용
      delta = E.wheelDelta;
    }

    let ht = $(window).height();

    if(delta > 1 && scrollEvent == true && count >= 1){ //마우스 휠을 위로 올렸을 경우
      scrollEvent = false;
      count--; //이전 section요소의 순번
      $("html,body").animate({"scrollTop":ht*count},500,function(){
        scrollEvent = true;
      });
    }else if(delta < 1 && scrollEvent == true && count < secMax){ //마우스 휠을 아래로 내렸을 경우
      scrollEvent = false;
      count++;
      $("html,body").animate({"scrollTop":ht*count},500,function(){
        scrollEvent = true;
      });
    }
  });
});
