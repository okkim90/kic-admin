/* 스크롤 이벤트 */
var vh = $(window).height();
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return (elementBottom > viewportTop + vh/10)  && (elementTop < viewportBottom - vh/10 ) ;
};




$(function(){
    $(window).on('load resize',function(){
        vh = $(window).height();
    });
    $(window).on('load resize scroll',function(){
        $('.aniBox').each(function(){
            if($(this).isInViewport()){
                $(this).addClass('gogo');
            }
        });
    });
});

