function CloseFeedback(){
    let element = document.querySelector('.feedback');
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
    element.style.right = '-520px';
}

function OpenFeedback(){
    let element = document.querySelector('.feedback');
    let blur = document.querySelector('.blur');

    blur.style.display = 'block';
    blur.style.opacity = '0.6';
    blur.style.zIndex = '7';
    element.style.right = '0';
}