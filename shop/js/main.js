document.addEventListener('DOMContentLoaded', function(event) { 

  // offcanvas menu

  let hamburger = document.querySelector('.hamburger');
  let body = document.querySelector('body');
  let siteheader = document.querySelector('.siteheader');
  let sitebanner = document.querySelector('.sitebanner');
  let sitefooter = document.querySelector('.sitefooter');

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
  let sitebanner_height = sitebanner.offsetHeight;
  let contentHeight = document.documentElement.clientHeight - header_height;

  const updateCSSvars = function() {
    document.documentElement.style.setProperty( '--header_height', header_height + 'px' );
    document.documentElement.style.setProperty( '--banner_height', sitebanner_height + 'px' );
    document.documentElement.style.setProperty( '--headerandbanner_height', header_height + sitebanner_height + 'px' );
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
  let ProductPreviewSlide = new Splide( '.product_preview_slide',{
    autoWidth :true,
    height    :'calc(100vh - var(--header_height))',
    // direction :'ttb',
    perPage   :1,
    pagination:false,
    breakpoints: {
      1110: {
        height    :'auto',
      },
    }
  });
  ProductPreviewSlide.mount();

  // var splide = new Splide( '.product_preview_slide' );
  // var bar    = splide.root.querySelector( '.my-slider-progress-bar' );
  
  // // Update the bar width:
  // splide.on( 'mounted move', function () {
  //   var end = splide.Components.Controller.getEnd() + 1;
  //   bar.style.width = String( 100 * ( splide.index + 1 ) / end ) + '%';
  // } );


  /* FANCYBOX */

  Fancybox.bind('[data-fancybox="ProductPreview"]', {
    Toolbar: {
      display: [
        "zoom",
        "download",
        "close",
      ],
    },
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