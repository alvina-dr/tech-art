









const openButton = document.getElementById('open-captcha-button');
const closeButton = document.getElementById('close-captcha-button');
const captcha = document.getElementById('captcha');
const verifier = document.querySelector('.purplebox');

function fermerPopup(){
  captcha.style.display="none"
}

verifier.addEventListener("click",fermerPopup);

closeButton.addEventListener("click",fermerPopup);

openButton.addEventListener("click",function(){
  console.log("openButtonClicked")
})

