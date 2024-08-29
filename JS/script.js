let navBar = document.getElementById("header");

//adicionamos um evento ao documento
document.addEventListener("scroll", ()=>{
    // Utilizamos o comando window.scrollY para capturar quando o usuario fazer o scroll da pagina verticalmente
    let scrollTop = window.scrollY;

    // verificamos se o usuario rolou a pagina
    if(scrollTop > 0){
        // adiciona se a classe rolar quando se rola
        navBar.classList.add("rolar");
    }else{
        // remove se a classe quando volta ao normal
        navBar.classList.remove("rolar");
    }
})