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
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class 'CustomSelect': */
x = document.getElementsByClassName('CustomSelect');
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName('select')[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName('same-as-selected');
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute('class');
            }
            this.setAttribute('class', 'same-as-selected');
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener('click', function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
      console.log('1');
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect);