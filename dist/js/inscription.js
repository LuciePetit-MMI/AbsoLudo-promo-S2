let listIndicateurs = document.querySelectorAll(".form a");
let formPart = document.querySelector("#form-particulier")
let formPro = document.querySelector("#form-pro")

function showForm(){
    "use strict";
    const lien = this;
    const selecteurDuSlide = lien.getAttribute("href");
    console.log(selecteurDuSlide)
    if(selecteurDuSlide=="#pro"){
        formPart.classList.add('none');
        formPro.classList.remove('none');
    }
    if(selecteurDuSlide=="#particulier"){
        formPart.classList.remove('none');
        formPro.classList.add('none');
    }
}


for (let i=0; i<listIndicateurs.length; i++){
    const indicateur = listIndicateurs[i];
    indicateur.addEventListener('click', showForm);
}