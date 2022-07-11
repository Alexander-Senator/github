glet data = prompt('введите :');

function gameLogic(){
  let dataInfo = ['камень','ножница','бумага']
  let random = Math.floor(Math.random()*3);
  let computerLogic = dataInfo[random]
  console.log(data);
  console.log(computerLogic);


  function callback(){
     if(data == computerLogic){
      alert('ничья')
    }else if (dataInfo[0]==dataInfo[2]) {
      console.log('бумага выиграла');
    }else if (dataInfo[1]==dataInfo[0]) {
      console.log('камень выиграл');
    }else if (dataInfo[2]==dataInfo[0]) {
      console.log('выиграла бумага');
    }
  }
  callback()



}

gameLogic()






// function secondary(x){
//   switch (x) {
//     case 1:
//         return 'один';
//     case 2:
//         console.log('два')
//     case 3:
//         console.log('три');
//     case 4:
//         console.log('четыре');
//     case 5:
//         console.log('пять');
//     case 6:
//         console.log('шесть');
//     case 7:
//         console.log('семь');
//     case 8:
//         console.log('восемь');
//     case 9:
//         console.log('девять');
//   }
// }
// secondary(1)






















//
//
//
//
//
//
// function moreNumber(a,b,c){
//   if(a>b && a>c){
//     console.log(a);
//   }else if (b>a && b > c) {
//     console.log(b);
//   }else{
//     console.log(c);
//   }
// }
//
// moreNumber(10,10,11)
//
// function moreNumberSecond(a,b,c){
//   return Math.max(a,b,c)
// }
// console.log(moreNumberSecond(1,2,3));
//
// function numberSwitch(a){
//   switch (a) {
//     case 1:
//     return 'один'
//     case 2:
//     return 'два'
//     case 3:
//     return 'три'
//     case 4:
//     return 'четыре'
//     case 5:
//     return 'пять'
//     case 6:
//     return 'шесть'
//     case 7:
//     return 'семь'
//     case 8:
//     return 'восемь'
//     case 9:
//     return 'девять'
//       break;
//     default:
//     return 'введите число от 1 до 9'
//   }
// }
// console.log(numberSwitch(9));
