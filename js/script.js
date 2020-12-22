//Função menu de seções
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu");
});