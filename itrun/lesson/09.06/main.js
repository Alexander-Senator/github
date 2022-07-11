// let num = 0;$('.start').on('click',()=>{
//    setInterval(()=>{
//      if(num >=0){
//        $('.counter').text(num--)
//    }
//  },1000)
//
//    $('window').css({
//      'display':'flex'
//    })
//  })


let num = 10;

$('.start').on('click',()=>{
  //  setInterval(()=>{
  //   if(num == 10){
  //     $('.timer').text(num--)
  //   }
  // },1000);

  $('.window').css({
    'display':'flex',
  })
})

// setInterval(()=>{
//   if (timer >= 0) {
//       $('.timer').text(timer--);
//     }
// },1000)
let second = $('.timer')
$('.start').on('click',function(){
  setInterval(function(){
    if(num ==10){
      $('.second').text(num--)
      console.log(num);
    }
  },1000)
})
