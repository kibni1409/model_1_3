/* Открытие всплывающего окна */
function ClosePopupPanel(elem){

    /* Окно с обратной связью */
    if(elem === 'feed'){
        let element = document.querySelector('.popupPanel.feedback');
        element.style.right = '-520px';
    }
    /* Окно с заказом звонка */
    if (elem === 'call'){
        let element = document.querySelector('.popupPanel.callback');
        element.style.right = '-520px';
    }

    let blur = document.querySelector('.blur');
    let sidebar = document.querySelector('.sidebar');

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


/* Закрытие окна */
function OpenPopupPanel(elem){
    /* Окно с обратной связью */
    if(elem === 'feed'){
        let element = document.querySelector('.popupPanel.feedback');
        element.style.display = 'flex';
        element.style.right = '0';
    }
    /* Окно с заказом звонка */
    if (elem === 'call'){
        let element = document.querySelector('.popupPanel.callback');
        element.style.display = 'flex';
        element.style.right = '0';
    }

    /* Замутнение экрана */
    let blur = document.querySelector('.blur');
    blur.style.display = 'block';
    blur.style.opacity = '0.6';
    blur.style.zIndex = '7';
}