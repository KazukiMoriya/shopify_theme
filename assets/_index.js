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
