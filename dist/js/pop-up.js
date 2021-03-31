    function popUp(){
        console.log('btn cliqué');
        var popup = document.querySelector('popup');
        popup.classList.toggle('active');
    }

const bouton = document.querySelectorAll("btn-don");
console.log(bouton);
    for (let i=0; i<bouton.length; i++){
        const unBouton = bouton[i];
        unBouton.addEventListener('click', popUp);
        console.log('btn cliqué');
    }