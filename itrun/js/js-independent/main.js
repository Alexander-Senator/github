//  напишем приложения которое будет запрашивать у пользователя текс кототрый он хочет ототбразить на сайта
let mainBody = document.querySelector('#main');
let btnViewDrop = document.querySelector('#view__drop');
let dropBtns = document.querySelector('#logic__drop');
let dropBtn = document.querySelectorAll('#logic__drop button');
console.log(dropBtn);

btnViewDrop.onclick = function(){
  console.log('ge');
  dropBtns.classList.toggle('active-drop');
}

dropBtn.onclick = function(e){
  console.log(1);
}
