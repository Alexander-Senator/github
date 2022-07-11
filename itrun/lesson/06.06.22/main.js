// alert('Добро п');
let points = $('.points');
let item = $('.item');
let point = 1;


item.on('click',()=>{
  let x = Math.floor(Math.random() * ($(document).width()-200));
  let y =Math.floor(Math.random() *  ($(document).height()-200));
  item.css({
    'top':y,
    'left':x,
  })
  points.text(point++)
});
