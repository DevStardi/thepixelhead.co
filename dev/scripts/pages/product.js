import { Splide } from '../v/splide.js';
import { Fancybox } from "../v/fancybox.js";

// SPLIDE
let ProductPreviewSplide = new Splide( '.ProductPreviewSplide',{
    pagination:   false,
    heightRatio:  '1.11111',
    direction:    'ttb',
    height:       'calc(100vh - 62px)',
    breakpoints:  {
      999: {
        direction:  'ltr',
        height:     'auto',
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
let sizeSelector = document.querySelector('.select-selected');

document.querySelector('.select-selected').addEventListener('click', function() {
  
  if(document.getElementById(sizeSelector.innerHTML)) {
    document.getElementById(sizeSelector.innerHTML).checked = true;
  }
});

let selectSize = document.querySelectorAll('.SelectSize input');
for (let i = 0; i < selectSize.length; i++) {
  selectSize[i].addEventListener('click', function() {

    console.log(document.querySelector('input[name="os0"]:checked').value);
    
    document.getElementById('SizePreSelect'). value = document.querySelector('input[name="os0"]:checked').value;
    document.querySelector('.select-selected').innerHTML = document.querySelector('input[name="os0"]:checked').value;
  });

}

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