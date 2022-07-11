let item = $('.item');
let timer = $('.timer');
let counter = $('.counter');
let sec = 10;
let point = 0;


item.on('click',function(){
  randomPosition();
  timerFun()
  scorePoints()


})





// логика выигрыша

// логика рандомного передвижения
function randomPosition(){
  let x = Math.floor(Math.random()*($(document).width()-200));
  let y = Math.floor(Math.random()*($(document).width()-200));
  item.css({
    'top':x,
    'left':y,
  })
}

// счетчик очков
function scorePoints(){
item.on('click',function(){
  if(point >=5){
    $('.winner').css({
      'display':'flex',
    })
  }else if (point <=5) {
    $('winner-text').text('вы проиграли')
  }
  counter.text(point++)
})
}
// таймер

function timerFun(){
  let timerId  = setInterval(()=>{
    if(sec >= 0){
      timer.text(sec--)
    }
  },1000)
}
