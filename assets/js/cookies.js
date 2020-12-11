let cookiesPopUp = document.getElementById("cookies");
const croix = document.querySelector(".croix");
const bouttonAccepter = document.querySelector(".accepter");

document.documentElement.style.overflow = 'hidden';

function hidePopUp () {
    cookiesPopUp.style.visibility = "hidden";
    console.log(cookiesPopUp);
    document.documentElement.style.overflow = 'auto';
}

bouttonAccepter.addEventListener('click', hidePopUp);

croix.addEventListener('click', hidePopUp);

