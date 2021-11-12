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

  // SLIDERS
  let ProductPreviewSlide = new Splide( '.product_preview_slide',{
    autoWidth :true,
    perPage   :1,
    pagination:false,
  });
  ProductPreviewSlide.mount();

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


  // dynamic space top (header height, footer responsive)  
  
  const updateCSSvars = function() {
    let footer_height = sitefooter.offsetHeight;
    let header_height = siteheader.offsetHeight;
    let sitebanner_height = sitebanner.offsetHeight;
    let contentHeight = document.documentElement.clientHeight - header_height;
    let ButtonAndPriceHeight = document.querySelector('.ButtonAndPrice').clientHeight;

    console.log(document.querySelector('.ButtonAndPrice'));
    console.log(document.querySelector('.sitefooter'));
    console.log(ButtonAndPriceHeight);
    console.log(footer_height);
    console.log(getComputedStyle(sitefooter).marginBottom);

    
    // document.querySelector('.product_content').offsetWidth
    let windowWidth = window.innerWidth;    
    let ProductPreviewSliderWidth = (window.innerHeight - header_height) * .9;
    let PopUpButtonWidth = document.querySelector('.button.order_popup').offsetWidth;
    let roundedLogoWidth = document.querySelector('.rounded_logo').offsetWidth;


    if (ProductPreviewSliderWidth + roundedLogoWidth + PopUpButtonWidth + 240 >= windowWidth) {
      document.body.classList.add('removePadding');
    }else {
      document.body.classList.remove('removePadding');
    }
    
    if(ProductPreviewSliderWidth + roundedLogoWidth + PopUpButtonWidth + 110 >= windowWidth) {
      document.body.classList.add('replaceroundedLogo');
    }else {
      document.body.classList.remove('replaceroundedLogo');
    }

    if(ProductPreviewSliderWidth + roundedLogoWidth + PopUpButtonWidth + 30 >= windowWidth) {
      document.body.classList.add('responsive');
    }else {
      document.body.classList.remove('responsive');
    }
    

    // first breakpoint to remove the padding of the wrapper



    document.documentElement.style.setProperty( '--header_height', header_height + 'px' );
    document.documentElement.style.setProperty( '--banner_height', sitebanner_height + 'px' );
    document.documentElement.style.setProperty( '--headerandbanner_height', header_height + sitebanner_height + 'px' );
    document.documentElement.style.setProperty( '--footer_height', footer_height + 'px' );
    document.documentElement.style.setProperty( '--content_height', contentHeight + 'px' );
    document.documentElement.style.setProperty( '--ButtonAndPriceHeight', ButtonAndPriceHeight + 'px' );
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