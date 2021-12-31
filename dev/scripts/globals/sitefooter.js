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