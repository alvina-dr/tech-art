const openButton = document.querySelector("#open-captcha-button");
// const closeButton = document.querySelector('#close-captcha-button');
// const captcha = document.getElementById('captcha');
// const verifier = document.querySelector('.purplebox');

openButton.addEventListener("click", () => {
  document.querySelector("#captcha").classList.remove('hidden');
});

// function fermerPopup(){
//   captcha.style.display="none"
// }

// verifier.addEventListener("click",fermerPopup);

// closeButton.addEventListener("click",fermerPopup);

// openButton.addEventListener("click",function(){
//   console.log("openButtonClicked")
// })
