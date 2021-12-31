import { Splide } from '../v/splide.js';
import { Fancybox } from "../v/fancybox.js";

// SPLIDE
let ProductPreviewSplide = new Splide( '.ProductPreviewSplide',{
    pagination:   false,
    heightRatio:  '1.11111',
    direction:    'ttb',
    // wheel       : true,
    // releaseWheel: true,
    height:       'calc(100vh - 62px)',
    breakpoints:  {
      999: {
        direction:  'ltr',
        height:     'auto',
        // wheel       : false,
        // releaseWheel: false,
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
  // maybe add a reverse sync too
});

// close cart on esc key
document.addEventListener('keydown', function(e) {
  // close when esc key pressed
  if(e.key === "Escape") {
      document.body.classList.remove('cart');
  }
});

// custom name
document.getElementById('os1').addEventListener('change', function() {
  if(this.options[document.getElementById('os1').selectedIndex].getAttribute('customname') >= 1) {
      document.getElementById('customNameText').classList.add('show');
  }else {
      document.getElementById('customNameText').classList.remove('show');
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