$('.clients__inner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
          items:2
        },
        1000:{
            items:3
        }
    }
})

$('#cocktails').hide();
$('#national').hide();

$('.menu__nav a').on('click',function(){
  let food = $(this).attr('href');
  $('.menu__inner section').hide(800);
  $(food).show(800)
  $('.menu__nav a').css('color','white')
  $(this).css({
    'color':'#FFCC33',
  })
})

// drop -menu
$('#drop-menu').on('click',function(){
  $('.drop__main').toggleClass('drop-active');
})

// close drop-menu
$('#drop-close').on('click',function(){
  $('.drop__main').removeClass('drop-active')
})


// tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj

$('.menu__burger').on('click',function(){
  $('.menu__drop__nav').toggleClass('drop-actived');
})
