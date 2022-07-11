
const added = ()=>{
  let preview = $('.preview__info');
  preview.toggle('.active');
}

const stylesAdded = (e)=>{
  let prItem = $('.preview__info__item');
  prItem.text(e);
}

$('.red').on('click',function(){
  $('body').css('background', '#FF0000');
  let btnInfo = 'Цвет : красный , Код цвета :#FF0000';
  added();
  stylesAdded(btnInfo);
});

$('.blue').on('click',function(){
  $('body').css('background', '#0099FF');
  let btnInfo = 'Цвет : синий , Код цвета :#0099FF';
  added();
  stylesAdded(btnInfo);
});
$('.green').on('click',function(){
  $('body').css('background', '#339933');
  let btnInfo = 'Цвет : зеленый , Код цвета :#339933';
  added();
  stylesAdded(btnInfo);
});
$('.orange').on('click',function(){
  $('body').css('background', '#FF9900');
  let btnInfo = 'Цвет : оранжевый , Код цвета :#FF9900';
  added();
  stylesAdded(btnInfo);
});

$('.img').on('click',function(){
  $('body').css({
    'background':'url(img.avif)',
    'background-repeat':'no-repeat',
    'background-size':'cover',
  });
  let btnInfo = 'Картинка , разрешение : 1980 & 1080';
  added();
  stylesAdded(btnInfo);
})


$('.random').on('click',function(){
  let colors =['red','blue','yellow','green',];
  let randomPr = colors[Math.floor(Math.random()*4)];
  $('body').css('background', randomPr);
  let btnInfo = `Цвет :${randomPr} `;
  added();
  stylesAdded(btnInfo);
});
