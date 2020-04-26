$(document).ready(function(){
    // $('.nav-link').click(function(){
    //     $('.nav-link').removeClass('color_btn_body_header');
    //     $(this).addClass('color_btn_body_header')
    // });
    $('.info_product-trending').hover(function(){
      // $('.hover_image_trend').toggle(200);
      // $('.hover_image_trend1').toggle(200)
      // $('.btn_primari_menu').addClass('background_btn_small_header')
      // $('.btn_vertical_menu').removeClass('background_btn_small_header')
  });
    // btn_small_menu
    $('.btn_primari_menu').click(function(){
      $('.content_primari_menu').show();
      $('.content_vertical_menu').hide()
      $('.btn_primari_menu').addClass('background_btn_small_header')
      $('.btn_vertical_menu').removeClass('background_btn_small_header')
  });
  $('.btn_vertical_menu').click(function(){
    $('.content_primari_menu').hide();
    $('.content_vertical_menu').show()
    $('.btn_vertical_menu').addClass('background_btn_small_header')
    $('.btn_primari_menu').removeClass('background_btn_small_header')
});
     // --- Nav |  01  |  Side-Slide
  $('.btn01').click(function() {
    $('.side-slide').animate({left: "0px"}, 200);
    $('.mask').toggle()
  });
  
  $('.nav01').click(function() {
    $('.side-slide').animate({left: "-310px"}, 200);
    $('.mask').toggle()
  });

  $('.mask').click(function () {
    $('.mask').toggle();
    $('.side-slide').animate({left: "-310px"}, 200);
})


// menu side bar
$(document).ready(function () {
  // $("#sidebar").niceScroll({
  //     cursorcolor: '#53619d',
  //     cursorwidth: 4,
  //     cursorborder: 'none'
  // });

  $('.overlay').on('click', function () {
     $('#sidebarCollapse').addClass('active');
     $('#sidebar').removeClass('active');
     $('.overlay').fadeOut();
  });

  $('#sidebarCollapse').on('click', function () {
     if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
     }
     });
});

// 
$("#menu a").click(function (event) {
  event.preventDefault();
  if ($(this).next('ul').length) {
    $(this).next().toggle('fast');
    $(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-up');
  }
});
    
})