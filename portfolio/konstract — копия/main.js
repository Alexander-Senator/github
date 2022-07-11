let menu =document.querySelector('.menu__burger');
let nav = document.querySelector('.nav__bar');

menu.onclick = function(){
  menu.classList.toggle('active');
  nav.classList.toggle('active');
};

$(window).on('beforeunload',()=>{
   $(window).scrollTop(0);
});
// $(()=>{
//   $(window).scrollTop(0);
// })
