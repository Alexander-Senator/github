let switchButtom = document.querySelector("#switchButtom");
 switchButtom.onclick = function () {
   let theme =document.querySelector("#theme");
   if (theme.getAttribute("href")=="style.css"){
     theme.href= "dark-style.css";
   } else{
      theme.href ="style.css";
   }
 };


 let menu = document.querySelector(".menu__bar");
 let nav = document.querySelector(".nav__bar");
 menu.onclick = function(){
   menu.classList.toggle("active");
   nav.classList.toggle("active");
 }
