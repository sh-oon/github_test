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



//모달레이어

$(window).ready(function(){
  var modal = $('.modal');
  var close = $('.close');
  var p1 = $('.p1');
  var p2 = $('.p2');
  var p3 = $('.p3');
  var ww = $(window).width();
  
  p1.click(function(){
    if (ww < 767){
    $('.modal.adererror').css({display : 'none'});
    location.href = 'http://wooreeweb.com/pf/2614/profile/sub1.html'
  } else {
    $('.modal.adererror').css({display : 'block'});
  };
  });

  p2.click(function(){
    if (ww < 767){
      $('.modal.cafeerip').css({display : 'none'});
      location.href = 'http://wooreeweb.com/pf/2614/profile/sub2.html'
    } else{
      $('.modal.cafeerip').css({display : 'block'});
    };
  });

  p3.click(function(){
    if (ww < 767){
      $('.modal.profile').css({display : 'none'});
    }else{
      $('.modal.profile').css({display : 'block'});
    };
  });
  $(window).resize(function(){
    ww = $(window).width();
    
  p1.click(function(){
    if (ww < 767){
    $('.modal.adererror').css({display : 'none'});
  } else {
    $('.modal.adererror').css({display : 'block'});
  };
  });

  p2.click(function(){
    if (ww < 767){
      $('.modal.cafeerip').css({display : 'none'});
    } else{
      $('.modal.cafeerip').css({display : 'block'});
    };
  });

  p3.click(function(){
    if (ww < 767){
      $('.modal.profile').css({display : 'none'});
    }else{
      $('.modal.profile').css({display : 'block'});
    };
  });
  
});


  close.click(function(){
    modal.css({display:'none'});
  });

  
  var modal = document.getElementsByClassName('modal')
  window.onclick = function (e) {
    if(e.target == modal[0]){
      modal[0].style.display = 'none'
      }
    if(e.target == modal[1]){
      modal[1].style.display = 'none'
      }
    if(e.target == modal[2]){
      modal[2].style.display = 'none'
      }
  }
});

//아무곳이나 클릭하면 모달 레이어 숨기기

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
  
	$('.m1, .mm1').click(function(){
        $('html').animate({scrollTop : introduce.top - 50}, 400);
	});
	$('.m2, .mm2').click(function(){
        $('html').animate({scrollTop : career.top - 50}, 400);
	});
	$('.m3, .mm3').click(function(){
        $('html').animate({scrollTop : portfolio.top - 50}, 400);
	});
	$('.m4, .mm4').click(function(){
        $('html').animate({scrollTop : contact.top - 50}, 400);
	});
});

var menuOut = document.getElementsByClassName('mo_gnb')
var mg = document.getElementsByClassName('mb.on')
window.onclick = function (e) {
  if(e.target == menuOut[0]){
    menuOut[0].style.display = 'none';
    $('.mb').removeClass('on');
    }
}

var lastScrollTop = 0,

    delta = 15;

  $(window).scroll(function(event) {

    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if ((st > lastScrollTop) && (lastScrollTop > 50)) {

      $("#header").css({

        "transition": "all 0.2s",
        "background-color": "rgba(255,255,255,1)",
        "box-shadow" : "0 5px 20px rgba(0, 0, 0, 0.8)",
        "height" : "50px"

      });
      $('.menu').css({
        "line-height":"30px"
      })

    } else if((st<lastScrollTop) && (lastScrollTop < 50)) {

      $("#header").css({

        "top": "0",
        "transition": "all 0.2s",
        "background-color": "rgba(255, 255, 255, 0)",
        "box-shadow" : "0 5px 20px rgba(0, 0, 0, 0)",
        "height":"100px"
      });
      $('.menu').css({
        "line-height":"80px"
      })

    }

    lastScrollTop = st;

  });


  //애니메이션 등장
  $(function(){

    var $offset = 1000;
    var $history = $('.history');
    var $skill = $('.skills');
    var $historyOST = $history.offset().top - $offset;
    var $skillOST = $skill.offset().top - $offset;
    var $p1OST = $('.p1').offset().top - $offset;
    var $p2OST = $('.p2').offset().top - $offset;
    var $p3OST = $('.p3').offset().top - $offset;
    var $commentOST = $('.comment_wrap').offset().top - $offset
    var $contactOST = $('.contact_wrap').offset().top - $offset
    var $moSkillsOST = $('.mo_skills').offset().top - $offset

    $(window).scroll(function(){
      if($(this).scrollTop() > $historyOST) {
        $history.addClass('animate__fadeInUp');
      }
      if ($(this).scrollTop() > $skillOST) {
        $skill.addClass('animate__fadeInUp');
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
      }
      if ($(this).scrollTop() > $p1OST) {
        $('.p1').addClass('animate__fadeInUp');
      }
      if ($(this).scrollTop() > $p2OST) {
        $('.p2').addClass('animate__fadeInUp');
      }
      if ($(this).scrollTop() > $p3OST) {
        $('.p3').addClass('animate__fadeInUp');
      }
      if ($(this).scrollTop() > $commentOST) {
        $('.comment_wrap').addClass('animate__fadeInUp');
      }
      if ($(this).scrollTop() > $contactOST) {
        $('.contact_wrap').addClass('animate__fadeInUp');
      }
      if ($(this).scrollTop() > $moSkillsOST) {
        $('.mo_skills').addClass('animate__fadeInUp');
      }
    });
    
    
  });

      //모바일 메뉴버튼
  $(function(){
    $('.mb').click(function(){
      $('.mb').toggleClass('on');
      if ($('.mb').hasClass('on')){
        $('.mo_gnb').css({"display": "block"});
 
      } else {
        $('.mo_gnb').css({"display" : "none"});
      };
 
    });
  });
    