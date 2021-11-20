// global variables
let siteheader = document.querySelector('.siteheader');
let sitenav = document.querySelector('.siteheader .sitenav');
let banner = document.querySelector('.siteheader .banner');
let hamburger = document.querySelector('.siteheader .hamburger');

let BannerHeight = document.querySelector('.siteheader .banner').offsetHeight;

// toggle menu
hamburger.addEventListener('click', function() {
    document.body.classList.toggle('menu');
})


const ToggleStickyHeader = function() {

    // reposition the circle buttons after scrolled the banner
    if (window.scrollY >= BannerHeight) {
        document.body.classList.add('sticky');
    }else {
        document.body.classList.remove('sticky');
    }
}
// fire on load & scroll
ToggleStickyHeader();
document.addEventListener('scroll', ToggleStickyHeader, true);
 

const UpdateAndSetCSSvars = function() {
    
    let SitenavHeight = sitenav.offsetHeight;
    let SiteheaderHeight = siteheader.offsetHeight;
    // set CSS vars
    document.documentElement.style.setProperty( '--SitenavHeight', SitenavHeight + 'px' );
    document.documentElement.style.setProperty( '--SitenavHeight', SitenavHeight + 'px' );
    document.documentElement.style.setProperty( '--BannerHeight', BannerHeight + 'px' );
}
// fire on load, scroll & resize
UpdateAndSetCSSvars();
window.addEventListener('scroll', UpdateAndSetCSSvars, true);
window.addEventListener('resize', UpdateAndSetCSSvars, true);