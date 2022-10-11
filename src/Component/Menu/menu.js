function OpenMenu(){
    let element = document.querySelector('.sidebar');
    let blur = document.querySelector('.blur');

    element.style.left = '0';
    blur.style.display = 'block';
    blur.style.opacity = '0.6';
}

function CloseMenu(){
    let element = document.querySelector('.sidebar');
    let blur = document.querySelector('.blur');

    element.style.left = '-400px';
    blur.style.opacity = '0';
    blur.style.display = 'none';
}