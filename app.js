// alert(age="Ismingiz kim")
$('#contactForm').submit( function(e) {
    //Stop submit
    e.preventDefault();
    //Begin AJAX Request
    $.ajax({
        url: $(this).attr('action'),
        type: 'POST',
        dataType: 'JSON',
        data: $(this).serialize(),
        success: function(response)
        {
            if (response.status)
            {
                $('.contact-success').text('Xabar qabul qilindi!').slideDown();
            }
            else {
                $('.contact-error').text('Bo`sh maydonlarni to`ldiring!');
                $('.contact-error').slideDown();
            }
        }
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });















