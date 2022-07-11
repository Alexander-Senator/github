let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav__hidden");
menu.onclick = function(){
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}
