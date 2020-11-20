jQuery(function($) {
    $('.bgswitcher').bgSwitcher({
        images: ['img/fv-bgi_01@2x.jpg','img/fv-bgi_02@2x.jpg','img/fv-bgi_03@2x.jpg'], // 切り替える背景画像を指定
        Interval: 5000, //切り替えの間隔 1000=1秒
        start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始する
        loop: true, //切り替えをループする
        shuffle: false, //背景画像の順番をシャッフルする
        effect: "fade", //エフェクトの種類 "fade" "blind" "clip" "slide" "drop" "hide"
        duration: 1000, //エフェクトの時間 1000=1秒
        easing: "swing", //エフェクトのイージング "swing" "linear"
    });
});

//スティッキーヘッダー
$(function(){
    var $win = $(window),
        $fv = $('.fv'),
        $headerTop = $('.header-top'),
        fvHeight = $fv.outerHeight();
        fixedClass = 'fixed';

    $win.on('load scroll',function(){
        var value = $(this).scrollTop();
        if($win.width() > 768){
            if(value > fvHeight){
                $headerTop.addClass(fixedClass);
            }else{
                $headerTop.removeClass(fixedClass);
            }
        }
    });
});

//ハンバーガーメニュー
$('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});
