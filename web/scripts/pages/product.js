import Splide from"../../node_modules/@splidejs/splide";import{Fancybox}from"../../node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js";let ProductPreviewSplide=new Splide(".ProductPreviewSplide",{pagination:!1,heightRatio:"1.11111",direction:"ttb",height:"calc(100vh - 62px)",breakpoints:{999:{direction:"ltr",height:"auto"}}});ProductPreviewSplide.mount(),Fancybox.bind('[data-fancybox="ProductPreview"]',{Toolbar:{display:["zoom","download","close"]}}),document.getElementById("SizePreSelect").addEventListener("change",(function(){document.getElementById(this.options[SizePreSelect.selectedIndex].value).checked=!0})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&document.body.classList.remove("cart")})),document.getElementById("os1").addEventListener("change",(function(){this.options[document.getElementById("os1").selectedIndex].getAttribute("customname")>=1?document.getElementById("customNameText").classList.add("show"):document.getElementById("customNameText").classList.remove("show")}));const UpdateAndSetCSSvars=function(){document.documentElement.style.setProperty("--CustomNameHeight",document.getElementById("os1").offsetHeight+12+"px"),document.documentElement.style.setProperty("--CartHeaderHeight",document.querySelector(".CartHeader").offsetHeight+"px")};UpdateAndSetCSSvars(),window.addEventListener("scroll",UpdateAndSetCSSvars,!0),window.addEventListener("resize",UpdateAndSetCSSvars,!0);