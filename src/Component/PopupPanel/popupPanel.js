/* Закрытие окна */
function ClosePopupPanel(e){

    let element;
    /* Окно с обратной связью */
    if(e.target.classList.contains('button_cancel')&& (e.target.classList.contains('feed'))){
        element = document.querySelector('.popupPanel.feedback');
    }

    /* Окно с заказом звонка */
    if (e.target.classList.contains('button_cancel') && (e.target.classList.contains('call'))){
        element = document.querySelector('.popupPanel.callback');
    }

    if (e.target.classList.contains('blur')){
        let elements = document.querySelectorAll('.popupPanel');
        for(let i = 0; i < elements.length; i++){
            if (elements[i].classList.contains('popupPanel__hidden')){

            }
            else {
                element = elements[i];
            }
        }
    }

    if(element){
        element.classList.add('popupPanel__hidden');
    }
    let html = document.querySelector('html');
    html.classList.remove('html_dontOverflow');


    /* Замутнение экрана */
    let blur = document.querySelector('.blur');
    blur.classList.add('blur_hidden');
    blur.classList.remove('blur_openPopup');
}


/* Открытие всплывающего окна */
function OpenPopupPanel(e){

    let element;
    /* Окно с обратной связью */
    if (e.target.classList.contains('button_message')) {
        element = document.querySelector('.popupPanel.feedback');
    }
    /* Окно с заказом звонка */
    if (e.target.classList.contains('button_call')){
        element = document.querySelector('.popupPanel.callback');
    }

    element.classList.remove('popupPanel__hidden');

    let html = document.querySelector('html');
    html.classList.add('html_dontOverflow');


    /* Замутнение экрана */
    let blur = document.querySelector('.blur');
    blur.classList.remove('blur_hidden');
    blur.classList.add('blur_openPopup');
}

document.addEventListener("DOMContentLoaded", function (){
    let openButton = document.querySelectorAll('.openPopup');
    for (let i = 0; i < openButton.length; i++){
        openButton[i].addEventListener('click', OpenPopupPanel);
    }

    let closeButton = document.querySelectorAll('.closePopup');
    for (let i = 0; i < closeButton.length; i++){
        closeButton[i].addEventListener('click', ClosePopupPanel);
    }

    let blur = document.querySelector('.blur');
    blur.addEventListener('click', ClosePopupPanel);
});
