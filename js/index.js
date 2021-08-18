$(function(){

  var $txt = $('.t-text');
  var speed = 100; //글자가 나오는 속도(ms)

  function typing (s,n){

    if(n < s.length){
      $txt.html(s.substring(0,n + 1));
      n++;
      setTimeout(function(){typing(s,n)},speed);
    }
  }

  $txt.show();
  var t = $txt.data('text'); //태그 내부에 작성된 컨텐츠
  typing(t,0);

});


$(function(){

  var skillScroe = [80,80,70,60,40]
  var $hb = $('.html_bar')
  var $cb = $('.css_bar')
  var $qb = $('.jquery_bar')
  var $sb = $('.js_bar')
  var $vb = $('.vue_bar')
  var $sh = $('.sh');
  var $sc = $('.sc');
  var $sq = $('.sq');
  var $ss = $('.ss');
  var $sv = $('.sv');
  
  //함수 정의(html)
  function movesh(){
    //모션 실행 함수
    var hw = parseInt($sh.text());
    var play = setInterval(status, 20);
    function status(){
      if(hw<skillScroe[0]){
        hw++;
        $hb.css({width:hw+'%'});
        $sh.text(hw+'%');
      } else{
        clearInterval(play);//setInterval 해제
      }
    }
  }
  movesh();

    //함수 정의(css)
    function movesc(){  
      //모션 실행 함수
      var cw = parseInt($sc.text());
      var play = setInterval(status, 20);
      function status(){
        if(cw<skillScroe[1]){
          cw++;
          $cb.css({width:cw+'%'});
          $sc.text(cw+'%');
        } else{
          clearInterval(play);//setInterval 해제
        }
      }
    }
    movesc();

      //함수 정의(jQuery)
  function movesq(){
    var qw = parseInt($sq.text());
    var play = setInterval(status, 20);
    //모션 실행 함수
    function status(){
      if(qw<skillScroe[2]){
        qw++;
        $qb.css({width:qw+'%'});
        $sq.text(qw+'%');
      } else{
        clearInterval(play);//setInterval 해제
      }
    }
  }
  movesq();

  //함수 정의(Javascript)
  function movess(){
    var sw = parseInt($ss.text());
    var play = setInterval(status, 20);
    //모션 실행 함수
    function status(){
      if(sw<skillScroe[3]){
        sw++;
        $sb.css({width:sw+'%'});
        $ss.text(sw+'%');
      } else{
        clearInterval(play);//setInterval 해제
      }
    }
  }
  movess();

  //함수 정의(Vue.js)
  function movesv(){
    var vw = parseInt($sv.text());
    var play = setInterval(status, 20);
    //모션 실행 함수
    function status(){
      if(vw<skillScroe[4]){
        vw++;
        $vb.css({width:vw+'%'});
        $sv.text(vw+'%');
      } else{
        clearInterval(play);//setInterval 해제
      }
    }
  }
  movesv();
});


//모달레이어

$(function(){
  var modal = $('.modal');
  var close = $('.close');
  var btn = $('#btn');

  btn.click(function(){
    modal.css({display : 'block'});
  });

  close.click(function(){
    modal.css({display:'none'});
  });
});

//아무곳이나 클릭하면 모달 레이어 숨기기
var modal = document.getElementsByClassName('modal')
window.onclick = function (e) {
  if(e.target == modal[0]){
    modal[0].style.display = 'none'
    }
}

//faq 자기소개서 스크롤토글
$(document).ready(function(){
  $('.qna_title').click(function(){
    var qa = $(this).next("div");
    var open = $(this).children("button");
    
    if( qa.is(":visible")){
      qa.slideUp();
      open.removeClass('on');
    } else{
      qa.slideDown();
      open.addClass('on');
    }
  });
});

$(document).ready(function() {
  var divHeight = $('.faq').height(); 
  var dh = $('.faq').height(); 
  $('.comment_wrap > h2').css('min-height', divHeight+'px');
  $('.comment_wrap').css('min-height', dh+'px');
}); 

$(document).ready(function(){
  $('.p_con').mouseover(function(){
    $(this).children("div").css({
      "background-color":"rgba(0,0,0,0.6)",
      "opacity" : 1,
      "color" : "#ccc",
      "transition" : "all .2s"
    });
  });
  $('.p_con').mouseout(function(){
    $(this).children("div").css({
      "opacity" : 0
    })
  })
});

//nav 위치이동
$(document).ready(function(){
  var introduce = $('#introduce').offset(); //선택한 태그의 위치를 환
  var career = $('#career').offset();
  var portfolio = $('#portfolio').offset();
  var contact = $('#contact').offset();
  
	$('.m1').click(function(){
        $('html').animate({scrollTop : introduce.top - 50}, 400);
	});
	$('.m2').click(function(){
        $('html').animate({scrollTop : career.top - 50}, 400);
	});
	$('.m3').click(function(){
        $('html').animate({scrollTop : portfolio.top - 50}, 400);
	});
	$('.m4').click(function(){
        $('html').animate({scrollTop : contact.top - 50}, 400);
	});
});

var lastScrollTop = 0,

    delta = 15;

  $(window).scroll(function(event) {

    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if ((st > lastScrollTop) && (lastScrollTop > 50)) {

      $("#header").css({

        "transition": "background-color 0.2s",
        "background-color": "rgba(255,255,255,1)",
        "box-shadow" : "0 5px 20px rgba(0, 0, 0, 0.8)"

      });
      $('#logo img:nth-child(1)').removeClass('on');
      $('#logo img:nth-child(2)').addClass('on');
      $('.opengnb span').css({"background-color":"#000"})
      $('.tnb li a').css({"color":"#000"})

    } else if((st<lastScrollTop) && (lastScrollTop < 50)) {

      $("#header").css({

        "top": "0",
        "transition": "background-color 0.2s",
        "background-color": "rgba(255, 255, 255, 0)",
        "box-shadow" : "0 5px 20px rgba(0, 0, 0, 0)"
      });
      $('#logo img:nth-child(2)').removeClass('on');
      $('#logo img:nth-child(1)').addClass('on');
      $('.opengnb span').css({"background-color":"#fff"})
      $('.tnb li a').css({"color":"#fff"})

    }

    lastScrollTop = st;

  });