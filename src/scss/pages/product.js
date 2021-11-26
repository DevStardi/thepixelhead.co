
import Splide from '../../../node_modules/@splidejs/splide';
import { Fancybox } from "../../../node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js";

// SPLIDE
let ProductPreviewSplide = new Splide( '.ProductPreviewSplide',{
    pagination:   false,
    heightRatio:  '1.11111',
    direction:    'ttb',
    height:       'calc(100vh - 62px)',
    breakpoints:  {
      1099: {
        direction:  'ltr',
        height:     'auto'
      }
    }
});
ProductPreviewSplide.mount();

// FANCYBOX
Fancybox.bind('[data-fancybox="ProductPreview"]', {
    Toolbar: {
      display: [
        "zoom",
        "download",
        "close",
      ],
    },
});

// update size selector
document.getElementById('SizePreSelect').addEventListener('change', function() {

  document.getElementById(this.options[SizePreSelect.selectedIndex].value).checked = true;
  // maybe I should also add a reverse sync
});

// fire fancybox on Enter klick
document.addEventListener('keydown', function(e) {

  if(e.key === "Enter") {

    Fancybox.show();
  }

});


const UpdateAndSetCSSvars = function() {
  // set CSS vars
  document.documentElement.style.setProperty( '--CustomNameHeight', document.getElementById('os1').offsetHeight + 12 + 'px' );
  document.documentElement.style.setProperty( '--CartHeaderHeight', document.querySelector('.CartHeader').offsetHeight + 'px' );
}
// fire on load, scroll & resize
UpdateAndSetCSSvars();
window.addEventListener('scroll', UpdateAndSetCSSvars, true);
window.addEventListener('resize', UpdateAndSetCSSvars, true);