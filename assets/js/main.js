

let main_visual_item = $('.main_visual_item');
const main_visual = new Swiper('.main_visual', {
    loop: true,
    // autoplay: {
    //   start :false,
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    effect: "fade",
    pagination: {
      el: '.main_visual_page',
      type: "fraction",
    },
    navigation: {
      nextEl: '.main_visual_next',
      prevEl: '.main_visual_prev',
    },
    on: {
      init: function(){
        let index = this.realIndex;
        $(`.main_visual_item[data-swiper-slide-index='${index}']`).addClass('on');
      },
      slideChange : function() {
        startProgressbar();
        let index = this.realIndex;
        $('.main_visual_item').removeClass('on');
        $(`.main_visual_item[data-swiper-slide-index='${index}']`).addClass('on');
      },
  },
});
// main_visual.autoplay.stop();

// $(window).on('load',()=>{
//   main_visual.autoplay.start();
// })
  


const $autoplay_delay = 5; 
const $bar = $('.main_visual_progress .bar');
const $progress_btn = $('.main_visual_btn');
let isPause,
    tick,
    percentTime;
function startProgressbar() {
  resetProgressbar();
  percentTime = 0;
  progress_play();
  tick = setInterval(interval, 10);
}

function interval() {
  if(isPause === false) {
    percentTime += 1 / ($autoplay_delay+0.1);
    $bar.css({
      width: percentTime+"%"
    });
    if(percentTime >= 100)
      {
        main_visual.slideNext();
        startProgressbar();
      }
  }
}

function resetProgressbar() {
  $bar.css({
   width: 0+'%' 
  });
  clearTimeout(tick);
}

function progress_pause(){
  isPause = true;
  $progress_btn.addClass('pause');
}
function progress_play(){
  isPause = false;
  $progress_btn.removeClass('pause');
}

$progress_btn.on('click',function(){
  if(isPause){
    progress_play()
  }else{
    isPause = true;
    progress_pause()
  }
});
startProgressbar();



//pause 
//isPause = true;

let main_notice = new Swiper('.main_notice', {
  slidesPerView: 2,
  spaceBetween: 40,
  slidesPerColumn: 1,
  loop:true,
  observer: true,
  observeParents: true,
  rebuildOnUpdate : true,
  navigation: {
    nextEl: '.main_notice_next',
    prevEl: '.main_notice_prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerColumn: 1,
      loop:true
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerColumn: 1,
      loop:true,
    }
  }
});
$(window).on('resize',function(){
  
   // main_notice.update();
    

});


$(function(){
  let bm_item = $('.main_business_item');
  let bm_bg = $('.main_business_bg').find('.bg_item');
  let idx = 0;
  bm_item.on('mouseenter',function(){
    idx = $(this).index();
    //console.log(idx);
    bm_bg.removeClass('on');
    bm_bg.eq(idx).addClass('on')
  });
})

