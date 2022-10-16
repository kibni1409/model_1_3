/* Закрытие окна */
function ClosePopupPanel(elem){

    let element;
    /* Окно с обратной связью */
    if(elem === 'feed'){
        element = document.querySelector('.popupPanel.feedback');
    }
    /* Окно с заказом звонка */
    if (elem === 'call'){
        element = document.querySelector('.popupPanel.callback');
    }

    element.style.transform = 'translateX(110vw)';
    setTimeout(() => {
        element.style.zIndex = '-2';
        element.style.left = '-110vw';
        element.style.top = '-150px';
    }, 500);


    let blur = document.querySelector('.blur');
    let sidebar = document.querySelector('.sidebar');
    let html = document.getElementsByTagName('html');
    html[0].style.overflowY = 'auto';


    /* Замутнение экрана */
    if(sidebar.style.left !== '0px'){
        blur.style.opacity = '0';
        blur.style.display = 'none';
        blur.style.zIndex = '2';
    }
    else{
        blur.style.zIndex = '2';
    }
}


/* Открытие всплывающего окна */
function OpenPopupPanel(elem){

    let element;
    /* Окно с обратной связью */
    if (elem === 'feed') {
        element = document.querySelector('.popupPanel.feedback');
    }
    /* Окно с заказом звонка */
    if (elem === 'call'){
        element = document.querySelector('.popupPanel.callback');
    }

    element.style.display = 'flex';
    element.style.left = '0';
    element.style.top = '0';
    element.style.zIndex = '10';
    let html = document.getElementsByTagName('html');
    html[0].style.overflowY = 'hidden';

    setTimeout(() => {  element.style.transform = 'translateX(calc(100vw - 100%))'; }, 300);

    /* Замутнение экрана */
    let blur = document.querySelector('.blur');
    blur.style.display = 'block';
    blur.style.opacity = '0.6';
    blur.style.zIndex = '7';
}