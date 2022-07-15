//
// let burger = document.querySelector('.menu__burger');
// let menu = document.querySelector('.menu__nav');
//
// burger.onclick = function(){
//   menu.classList.toggle('active');
//   burger.classList.toggle('close');
//   burger.style.transition = 'all .25s ease-in-out';
//   menu.style.transition = 'all .5s ease-in-out';
// }

$('.menu__burger').on('click',function(){
  $('.menu__nav').toggleClass('active');
  $('.menu__burger').toggleClass('close');
})

$('.air__window__btn a').on('click',function(){
  $('.air__window').css({
    'display':'none'
  })
})
