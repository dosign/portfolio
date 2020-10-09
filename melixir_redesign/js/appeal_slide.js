$(document).ready(function(){
  	var start;
  	var slideleft;
  	var end;
  	$(".appeal_list").bind("touchstart",function(e){
  		e.preventDefault();
  		start = e.originalEvent.touches[0].clientX;
  		slideleft = parseFloat($(".appeal_list").css("left"));
  	});
  	$(".appeal_list").bind("touchmove",function(e){
  		e.preventDefault();
  		var move = e.originalEvent.touches[0].clientX;
  		var sum = slideleft+(move-start);
      var leng = $(".appeal_list > article").length-1;
  		var imgwd = parseFloat($(".appeal_list > article").width())*leng;
  		$(".appeal_list").css("left",sum);
      //console.log(sum)
  		if(sum >= 0){
  			$(".appeal_list").css("left",0);
  		}else if(sum <= -imgwd){
  			$(".appeal_list").css("left",-imgwd);
  		}
  	});
  	$(".appeal_list").bind("touchend",function(e){
  		e.preventDefault();
  		end = e.originalEvent.changedTouches[0].clientX
  		touch_event();
  	});

  	function touch_event(){
  		var sum = end - start;
  		//console.log(sum)
      var imgwd = parseFloat($(".appeal_list > article").width())
  		if(sum > 0){
  			$(".appeal_list").stop().animate({"left":0});
  		}else{
  			$(".appeal_list").stop().animate({"left":-imgwd});
  		}
  	}
});
