$(document).ready(function() {


  // ============== //
  // offcanvas menu //
  // ============== //

  $('.hamburger').click(function(e){
    e.preventDefault();

    // add canvas
    $('body').toggleClass('canvas');
    $('.menu').toggleClass('canvas');
    $('.content').toggleClass('canvas');
    $('.siteheader').toggleClass('canvas');
    $('.sitecontent').toggleClass('canvas');
    $('.sitefooter').toggleClass('canvas');
    $('.hamburger').toggleClass('canvas');

  });


  // ======= //
  // sliders //
  // ======= //

  // product page

   $('.product_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });
  $('.product_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product_big',
    dots: false,
    focusOnSelect: true
  });


  /*
  // Teaser Homepage //

  $('.teaser').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  */

  // Homepage Products Preview //

  $('.products').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // ====== //
  // pop up //
  // ====== //

  $('a.button.order_popup').on('click',function() {
    $('article.popup').show();
    $('body').addClass('popup_active');    
  });


  $('a.close').on('click',function() {
    $('article.popup').hide();
    $('body').removeClass('popup_active');
  });

});

