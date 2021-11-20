// general variables
let siteheader = document.querySelector('.siteheader');
let sitenav = document.querySelector('.siteheader .sitenav');
let banner = document.querySelector('.siteheader .banner');

document.addEventListener('scroll', function() {

    // reposition the circle buttons after scrolled the banner    
    if (window.scrollY >= banner.offsetHeight) {
        siteheader.classList.add('fixed');
    }else {
        siteheader.classList.remove('fixed');
    }
    
});

const UpdateAndSetCSSvars = function() {
    
    let SitenavHeight = sitenav.offsetHeight;
    
    // set CSS vars
    document.documentElement.style.setProperty( '--SitenavHeight', SitenavHeight + 'px' );
}

UpdateAndSetCSSvars();
window.addEventListener('resize', UpdateAndSetCSSvars, true);