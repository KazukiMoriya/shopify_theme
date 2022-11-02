$(function(){
  $(".js-hamburger").on("click",function(){
    $(this).children().toggleClass("is-active");
    if($(".l-header__bar").hasClass("is-active")){
      $(".l-header-nav").addClass("is-show");
    }else{
      $(".l-header-nav").removeClass("is-show");
    }
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});