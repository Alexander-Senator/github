// alert('Добро п');
let points = $('.points');
let item = $('.item');
let point = 1;
let timer = 10;

item.on('click',()=>{
  let x = Math.floor(Math.random() * ($(document).width()-200));
  let y =Math.floor(Math.random() *  ($(document).height()-200));
  item.css({
    'top':y,
    'left':x,
  })
setTimeout(()=>{
  if(point >= 5){
    $('.finish').css('display','flex')
  }else if (point <=5) {
    $('.lose').css('display','flex')
},10000)

  points.text(point++)
});


setInterval(()=>{
  if (timer >= 0) {
      $('.timer').text(timer--);
    }
},1000)
