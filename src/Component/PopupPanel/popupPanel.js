function ClosePopupPanel(elem){
    if(elem === 'feed'){
        let element = document.querySelector('.popupPanel.feedback');
        element.style.right = '-520px';
    }
    if (elem === 'call'){
        let element = document.querySelector('.popupPanel.callback');
        element.style.right = '-520px';
    }

    let blur = document.querySelector('.blur');
    let sidebar = document.querySelector('.sidebar');

    if(sidebar.style.left !== '0px'){
        blur.style.opacity = '0';
        blur.style.display = 'none';
        blur.style.zIndex = '2';
    }
    else{
        blur.style.zIndex = '2';
    }

}

function OpenPopupPanel(elem){

    if(elem === 'feed'){
        let element = document.querySelector('.popupPanel.feedback');
        element.style.right = '0';
    }
    if (elem === 'call'){
        let element = document.querySelector('.popupPanel.callback');
        element.style.right = '0';
    }

    let blur = document.querySelector('.blur');

    blur.style.display = 'block';
    blur.style.opacity = '0.6';
    blur.style.zIndex = '7';

}