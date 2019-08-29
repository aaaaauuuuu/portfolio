$(function() {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides : true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      })
      
})

$(function(){
  $('.about').mouseover(function(){
    console.log('aaa');
    $('html').animate({scrollTop: 800},1200);
  })

  $('.skill').mouseover(function(){
    console.log('aaa');
    $('html').animate({scrollTop: 1850},2000);
  })

  $('.button').click(function(){
    console.log('bbb');
    $('html').animate({scrollTop:0}, 1000);
  })
})