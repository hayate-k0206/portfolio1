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