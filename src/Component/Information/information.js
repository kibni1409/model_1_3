function ReadMore() {
    let info = document.querySelector('.information__block-text');
    info.style.maxHeight = 'none';
    info.style.height = 'auto';

    let readMore = document.querySelector('.information__block-more');
    readMore.style.display = 'none';
}

function Size(){
    let infoText = document.querySelector('.information__block-text');
    let infoMore = document.querySelector('.information__block-more');
    if( infoText.scrollWidth > infoText.offsetWidth || infoText.scrollHeight > infoText.offsetHeight){
        infoMore.style.display = 'flex';
    }
    else{
        infoMore.style.display = 'none';
    }
}