
import Splide from '../../../node_modules/@splidejs/splide';

let ProductPreviewSplide = new Splide( '.ProductPreviewSplide',{
    pagination:false,
    heightRatio :'1.11111',
    direction   : 'ttb',
    breakpoints: {
        1099: {
            direction   : 'ltr',
		},
    }
});
ProductPreviewSplide.mount();

import { Fancybox } from "../../../node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js";

Fancybox.bind('[data-fancybox="ProductPreview"]', {
    Toolbar: {
      display: [
        "zoom",
        "download",
        "close",
      ],
    },
});