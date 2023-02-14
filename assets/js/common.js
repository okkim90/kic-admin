const r_nav = $('.right_nav_area');
const r_nav_w = $('.right_nav_wrap');
$(window).on('load scroll',function(){
    
    let top_pos = r_nav_w.offset().top; 
    let win_pos = this.scrollY;
    if(win_pos > top_pos){
        r_nav.addClass('on');
    }else{
        r_nav.removeClass('on');
    }
});


function close_popup(target){
    let $this = $(target);
    let $layer_popup = $this.parents('.layer_popup');
    $layer_popup.removeClass('on');
}