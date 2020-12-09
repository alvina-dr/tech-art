const menuBtn = document.querySelector('.menu-btn');
var menuOuvert = document.getElementById('m_ouvert')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menuOuvert.style.display='flex';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuOuvert.style.display='none';
    }
});

const menuBtnBurger = document.querySelector('.menu-btn__burger');