document.addEventListener("DOMContentLoaded", function(event) { 

  // offcanvas menu

  let hamburger = document.querySelector('.hamburger');
  let body = document.querySelector('body');
  let menu = document.querySelector('.menu');
  let siteheader = document.querySelector('.siteheader');
  let sitecontent = document.querySelector('.sitecontent');
  let sitefooter = document.querySelector('.sitefooter');

  // function toggleClassCanvas(p){
  //   p.classList.toggle('canvas');
  // }

  hamburger.addEventListener('click', event => {

    hamburger.classList.toggle('canvas');
    body.classList.toggle('canvas');
    menu.classList.toggle('canvas');
    siteheader.classList.toggle('canvas');
    sitecontent.classList.toggle('canvas');
    sitefooter.classList.toggle('canvas');

  });


  // dynamic space top (header height)

  let header_height = siteheader.offsetHeight;

  window.addEventListener('resize', function(event) {

    let header_height = siteheader.offsetHeight;
    document.querySelector('.sitecontent').style.marginTop = header_height + 'px';
 
  }, true);

  document.querySelector('.sitecontent').style.marginTop = header_height + 'px';


  // SLIDERS

  // Homepage Products Preview
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


  // PayPal Pop Up

  let PopUpButton = document.querySelector('a.button.order_popup');
  let PopUp = document.querySelector('article.popup');

  PopUpButton.addEventListener('click', event => {
    PopUp.classList.add('show');
    body.classList.add('fade');
  });

  // close button
  document.querySelector('a.close').addEventListener('click', event => {
    PopUp.classList.remove('show');
    body.classList.remove('fade');
  });

  // remove popup clicking outside of div
  document.addEventListener('mouseup', function(e) {

    let $popup = $('article.popup');

    // if the target of the click isn't the container nor a descendant of the container
    if (!$popup.is(e.target) && $popup.has(e.target).length === 0) {
      PopUp.classList.remove('show');
      body.classList.remove('fade');
    }
  });

  // PopUp.addEventListener('mousedown', function(){
  //   console.log('haha');
  // });


  // Size selector for Product request via mail
  // html > test-product

  /*
  $('span.size').on('click', function(){
    let $size = this.getAttribute('size');

    $('p.size_selector span').removeClass('selected')
    $(this).addClass('selected')

    let email = 'shop@thepixelhead.co';
    let subject = encodeURIComponent('Holo Shirt white blue');
    let body = encodeURIComponent('Hallo,\nich würde gerne das Shirt in Größe '+$size+' bestellen');
    $('a.button.order').attr('href', 'mailto:'+email+'?subject='+subject+'&body='+body);
    
    $('a.button.order').removeClass('no_click')

  }); */

});