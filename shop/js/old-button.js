  // Size selector for Product request via mail
  // html > test-product

  $('span.size').on('click', function(){
    let $size = this.getAttribute('size');

    $('p.size_selector span').removeClass('selected')
    $(this).addClass('selected')

    let email = 'shop@thepixelhead.co';
    let subject = encodeURIComponent('Holo Shirt white blue');
    let body = encodeURIComponent('Hallo,\nich würde gerne das Shirt in Größe '+$size+' bestellen');
    $('a.button.order').attr('href', 'mailto:'+email+'?subject='+subject+'&body='+body);
    
    $('a.button.order').removeClass('no_click')

  }); 