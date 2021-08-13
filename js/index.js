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

  //함수 정의
  function move(){
    var $container = $('.progressArea');
    var $bar = $('.bar');
    var $lbl = $('.label');

    var w = parseInt($lbl.text());
    var play = setInterval(status, 20);
    var duration1 = 500; //시간1
    var duration2 = 1000; //시간2

    //모션 실행 함수
    function status(){
      if(w<100){
        w++;
        $bar.css({width:w+'%'});
        $lbl.text(w+'%');
      } else{
        clearInterval(play);//setInterval 해제

        /* ********************************************************
                2단계 : 페이지 전환 모션
                $container : 슬라이드 아웃(jQuery Easing)
                $bar : 페이드 아웃 
        ************************************************************/

        
        
      }
    }
  }
  move();
  
});