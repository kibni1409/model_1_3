/* Открыть меню */
function OpenMenu(){
    let html = document.getElementsByTagName('html');
    let element = document.querySelector('.sidebar');
    let blur = document.querySelector('.blur');

    element.style.left = '0';
    blur.style.display = 'block';
    blur.style.opacity = '0.6';
    html[0].style.overflow = 'hidden';
}

/* Закрыть меню */
function CloseMenu(){
    let html = document.getElementsByTagName('html');
    let element = document.querySelector('.sidebar');
    let blur = document.querySelector('.blur');

    html[0].style.overflowY = 'auto';
    element.style.left = '-400px';
    blur.style.opacity = '0';
    blur.style.display = 'none';
}