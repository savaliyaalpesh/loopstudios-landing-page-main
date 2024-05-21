const btnMenu = document.querySelector('#menu');
const btnX = document.querySelector('#x');
const modalContainer = document.querySelector('.menu-mobile');



btnMenu.addEventListener('click', () => {
    modalContainer.classList.toggle('menu-on')

    if(modalContainer.classList.contains('menu-on')){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
})

btnX.addEventListener('click', () => {
    modalContainer.classList.toggle('menu-on')
    if(modalContainer.classList.contains('menu-on')){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});