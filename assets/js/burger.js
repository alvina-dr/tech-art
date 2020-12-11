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
        document.documentElement.style.overflow = 'hidden';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuOuvert.style.display='none';
        document.documentElement.style.overflow = 'auto';
    }
});
menuBtnQui.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
});
menuBtnOffre.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
});
menuBtnService.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
});
menuBtnProjet.addEventListener('click', () => {
    menuOpen = false;
    menuOuvert.style.display='none';
    menuBtn.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
});
const menuBtnBurger = document.querySelector('.menu-btn__burger');