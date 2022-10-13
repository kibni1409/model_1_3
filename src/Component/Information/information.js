function ReadMore(el) {
    let text;
    let firma;
    let icon;

    /* Читать далее в блоке информации */
    if (el === 'info') {
        let info = document.querySelector('.information__block-text');
        info.style.maxHeight = 'none';
        info.style.height = 'auto';
        let readMore = document.querySelector('.information__block-more.info');
        readMore.style.display = 'none';
    }
    else {
        /* Читать далее в блоке с фирмами */
        if (el === 'firma') {
            text = document.querySelector('.information__more-text.firma');
            firma = document.querySelector('.repairBar__main.firma');
            icon = document.querySelector('.information__more-icon.firma')
        }

        /* Читать далее в блоке с моделями */
        if (el === 'model') {
            text = document.querySelector('.information__more-text.model');
            firma = document.querySelector('.repairBar__main.model');
            icon = document.querySelector('.information__more-icon.model')
        }

        if (text.textContent === 'Показать все') {
            firma.style.height = 'auto';
            text.textContent = 'Скрыть';
            icon.style.transform = 'rotate(180deg)';
        }
        else {
            firma.style.height = '176px';
            text.textContent = 'Показать все';
            icon.style.transform = 'rotate(0deg)'
        }
    }


}

/* Скрыть блок читать далее */
function Size(){
    let infoText = document.querySelector('.information__block-text');
    let infoMore = document.querySelector('.information__block-more.info');
    if( infoText.scrollWidth > infoText.offsetWidth || infoText.scrollHeight > infoText.offsetHeight){
        infoMore.style.display = 'flex';
    }
    else{
        infoMore.style.display = 'none';
    }
}