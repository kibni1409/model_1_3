/* Открыть меню */
function OpenMenu(){

    let html = document.querySelector('html');
    html.classList.add('html_dontOverflow');

    let element = document.querySelector('.sidebar');
    element.classList.add('sidebar_open');

    let blur = document.querySelector('.blur');
    blur.classList.add('blur_openMenu');
}

/* Закрыть меню */
function CloseMenu(){

    let html = document.querySelector('html');
    html.classList.remove('html_dontOverflow');

    let element = document.querySelector('.sidebar');
    element.classList.remove('sidebar_open');

    let blur = document.querySelector('.blur');
    blur.classList.remove('blur_openMenu');
}

document.addEventListener("DOMContentLoaded", function (){
    let menuButton = document.querySelector('.menu__button.button.button_menu');
    menuButton.addEventListener('click', OpenMenu);

    let closeButton = document.querySelector('.menu__button.button.button_cancel')
    closeButton.addEventListener('click', CloseMenu);

    let blur = document.querySelector('.blur');
    blur.addEventListener('click', CloseMenu);
})