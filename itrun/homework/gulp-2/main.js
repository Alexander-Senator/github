$('.my-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


// tabs logic
$('#desert').hide();
$('#exlusive').hide();
// $('#btn-1').toggleClass('tabs__active');

$('.exlore__tabs a').on('click',function(){
  let view = $(this).attr('href');
  $('.explore__inner section').hide()
  $(view).show()
  console.log(view);
})
// eprevent default
