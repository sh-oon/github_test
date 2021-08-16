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