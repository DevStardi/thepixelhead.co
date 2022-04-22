import { Splide } from '/scripts/v/splide.js';

// SPLIDE
let productSliderSplide = new Splide( '.productSlider',{
    pagination:     false,
    perPage:        4,
    perMove:        1,
    gap:            '1rem',
    breakpoints:  {
        1000: {
            perPage:        3,
        },
        600: {
            perPage:        2,
        }
    }
});
productSliderSplide.mount();