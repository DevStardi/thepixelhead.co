// global variables
let siteheader = document.querySelector('.siteheader');
let SmallHeader = document.querySelector('.siteheader .SmallHeader');
let banner = document.querySelector('.siteheader .banner');
let hamburger = document.querySelector('.siteheader .hamburger');

let BannerHeight = document.querySelector('.siteheader .banner').offsetHeight;

// toggle menu
hamburger.addEventListener('click', function() {
    document.body.classList.toggle('menu');

    if (window.scrollY <= BannerHeight) {
        window.scrollTo(0,0)
    }
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
    
    let SmallHeaderHeight = SmallHeader.offsetHeight;
    let SiteHeaderHeight = siteheader.offsetHeight;
    // set CSS vars
    document.documentElement.style.setProperty( '--SiteHeaderHeight', SiteHeaderHeight + 'px' );
    document.documentElement.style.setProperty( '--SmallHeaderHeight', SmallHeaderHeight + 'px' );
    document.documentElement.style.setProperty( '--BannerHeight', BannerHeight + 'px' );
}
// fire on load, scroll & resize
UpdateAndSetCSSvars();
window.addEventListener('scroll', UpdateAndSetCSSvars, true);
window.addEventListener('resize', UpdateAndSetCSSvars, true);
document.addEventListener('scroll', function() {
    // console.log(window.scrollY);
    // scrollHeight();
    if (window.scrollY >= document.querySelector('.sitecontent').offsetHeight - document.querySelector('.SmallHeader').offsetHeight) {
        document.body.classList.add('footer');
    }else {
        document.body.classList.remove('footer');
    }
})


const UpdateAndSetFooterCSSvars = function() {
    // set CSS vars
    document.documentElement.style.setProperty( '--SiteFooterHeight', document.querySelector('.sitefooter').offsetHeight + 'px' );
}
// fire on load, scroll & resize
UpdateAndSetFooterCSSvars();
window.addEventListener('scroll', UpdateAndSetFooterCSSvars, true);
window.addEventListener('resize', UpdateAndSetFooterCSSvars, true);