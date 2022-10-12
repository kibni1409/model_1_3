function ReadMore(el) {
    if(el === 'info'){
        let info = document.querySelector('.information__block-text');
        info.style.maxHeight = 'none';
        info.style.height = 'auto';
    }
    if(el === 'firma'){
        let text = document.querySelector('.information__more-text.firma');
        let firma = document.querySelector('.repairBar__main.firma');
        let icon = document.querySelector('.information__more-icon.firma')

        if(text.textContent === 'Показать все'){
            firma.style.height = 'auto';
            text.textContent = 'Скрыть';
            icon.style.transform = 'rotate(180deg)';
        }
        else{
            firma.style.height = '176px';
            text.textContent = 'Показать все';
            icon.style.transform = 'rotate(0deg)'
        }
    }
    if(el === 'model'){

    }


    /*let readMore = document.querySelector('.information__block-more');*/
    /*readMore.style.display = 'none';*/
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