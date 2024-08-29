let btnMenuMob = document.querySelector("#btn-menu-mob");
let line1 = document.querySelector(".line-menu-mob-1");
let line2 = document.querySelector(".line-menu-mob-2");

let body = document.querySelector("body")

let menuMobile = document.querySelector("#menu-mobile");

btnMenuMob.addEventListener("click", ()=>{
    line1.classList.toggle("ativo1");
    line2.classList.toggle("ativo2");
    menuMobile.classList.toggle("abrir");
    body.classList.toggle("no-overflow")
})