document.addEventListener("DOMContentLoaded", function(event) { 


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

  // offcanvas menu vanilla JS

  var hamburger = document.querySelector('.hamburger');
  var body = document.querySelector('body');
  var menu = document.querySelector('.menu');
  var content = document.querySelector('.content');
  var siteheader = document.querySelector('.siteheader');
  var sitecontent = document.querySelector('.sitecontent');
  var sitefooter = document.querySelector('.sitefooter');

  function toggleClassCanvas(){
    p.classList.toggle('canvas');
  }

  hamburger.addEventListener('click', event => {

    toggleClassCanvas(hamburger);
    toggleClassCanvas(body);
    toggleClassCanvas(menu);
    toggleClassCanvas(content);
    toggleClassCanvas(siteheader);
    toggleClassCanvas(sitecontent);
    toggleClassCanvas(sitefooter);

  });


  // dynamic space top (header height)

  var siteheader = document.querySelector('.siteheader');
  var header_height = siteheader.offsetHeight;

  window.addEventListener('resize', function(event) {

    var header_height = siteheader.offsetHeight;
    document.querySelector('.sitecontent').style.marginTop = header_height + 'px';
 
  }, true);

  document.querySelector('.sitecontent').style.marginTop = header_height + 'px';

  // ======= //
  // sliders //
  // ======= //

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

  // product page

  $('.product_big').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,

  });
  $('.product_nav').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product_big',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });


  /* FANCYBOX */

  $('.product_big a').fancybox({
    buttons: [
      "zoom",
      "download",
      "close",
    ],
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

  // remove popup clicking outside of div
  $(document).mouseup(function(e) {
    var $popup = $('article.popup');

    // if the target of the click isn't the container nor a descendant of the container
    if (!$popup.is(e.target) && $popup.has(e.target).length === 0) 
    {
      $popup.hide();
      $('body').removeClass('popup_active');
    }
  });

  // Size selector //

  $('span.size').on('click', function(){
    var $size = this.getAttribute('size');

    $('p.size_selector span').removeClass('selected')
    $(this).addClass('selected')

    var email = 'shop@thepixelhead.co';
    var subject = encodeURIComponent('Holo Shirt white blue');
    var body = encodeURIComponent('Hallo,\nich würde gerne das Shirt in Größe '+$size+' bestellen');
    $('a.button.order').attr('href', 'mailto:'+email+'?subject='+subject+'&body='+body);
    
    $('a.button.order').removeClass('no_click')

  });


});