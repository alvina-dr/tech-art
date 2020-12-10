const menuBtn = document.querySelector('.menu-btn');
const menuBtnQui = document.querySelector('#btnQui');
const menuBtnOffre = document.querySelector('#btnOffre');
const menuBtnService = document.querySelector('#btnService');
const menuBtnProjet = document.querySelector('#btnProjet');
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
menuBtnQui.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
});
menuBtnOffre.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
});
menuBtnService.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
});
menuBtnProjet.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
});
const menuBtnBurger = document.querySelector('.menu-btn__burger');