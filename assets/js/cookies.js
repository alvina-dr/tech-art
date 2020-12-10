let cookiesPopUp = document.getElementById("cookies");
const croix = document.querySelector(".croix");
const bouttonAccepter = document.querySelector(".accepter");


function hidePopUp () {
    cookiesPopUp.style.visibility = "hidden";
    console.log(cookiesPopUp);
}

bouttonAccepter.addEventListener('click', hidePopUp);

croix.addEventListener('click', hidePopUp);

