$('.red').on('click',function(){
  $('body').css('background', '#FF0000');
});
$('.blue').on('click',function(){
  $('body').css('background', '#0099FF');
});
$('.green').on('click',function(){
  $('body').css('background', '#339933');
});
$('.orange').on('click',function(){
  $('body').css('background', '#FF9900');
});

$('.img').on('click',function(){
  $('body').css({
    'background':'url(img/images.avif)',
    'background-repeat':'no-repeat',
    'background-size':'cover',
  });
})

let colors =['red','blue','yellow','green',];
let randomPr = colors[Math.floor(Math.random()*4)];
$('.random').on('click',function(){
  $('body').css('background', randomPr);
});
