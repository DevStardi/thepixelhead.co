document.addEventListener('DOMContentLoaded', function(event) { 

  // offcanvas menu

  let hamburger = document.querySelector('.hamburger');
  let body = document.querySelector('body');
  let menu = document.querySelector('.menu');
  let siteheader = document.querySelector('.siteheader');
  let sitecontent = document.querySelector('.sitecontent');
  let sitefooter = document.querySelector('.sitefooter');

  // function toogleMenu() {

  //   function addClassCanvas(i) {
  //     i.classList.toggle('canvas');
  //   }

  //   addClassCanvas(hamburger);
  //   addClassCanvas(body);
  //   addClassCanvas(menu);
  //   addClassCanvas(siteheader);
  //   addClassCanvas(sitecontent);
  //   addClassCanvas(sitefooter);
  // }

  hamburger.addEventListener('click', function() {
    document.body.classList.add('menu');
    hamburger.classList.add('menu')
  });

  function removeMenu() {
    document.body.classList.remove('menu')
  }


  // dynamic space top (header height, footer responsive)  
  let footer_height = sitefooter.offsetHeight;
  let header_height = siteheader.offsetHeight;
  let contentHeight = document.documentElement.clientHeight - header_height;

  const updateCSSvars = function() {
    document.querySelector('.sitecontent').style.marginTop = header_height + 'px';

    document.documentElement.style.setProperty( '--header_height', header_height + 'px' );
    document.documentElement.style.setProperty( '--footer_height', footer_height + 'px' );
    document.documentElement.style.setProperty( '--content_height', contentHeight + 'px' );
  }

  updateCSSvars();
  window.addEventListener('resize', updateCSSvars, true);

	// FOOTER RESPONSIVE
	
  const scrollFooter = function() {

    let togglerTopPos = document.querySelector('.toggler').getBoundingClientRect().top;
   
    if (togglerTopPos <= 0) {
      document.body.classList.add('footer_scroll');
    }
    else {
      document.body.classList.remove('footer_scroll');
    }
  }

  scrollFooter();
	document.addEventListener('scroll', scrollFooter);
	document.addEventListener('resize', scrollFooter);
  

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

});