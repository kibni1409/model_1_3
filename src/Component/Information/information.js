/* Развертка */
function ReadMore(e) {
    let text;
    let firma;
    let icon;

    /* Читать далее в блоке информации */
    if (e.target.classList.contains('info')){

        console.log(1)
        let info = document.querySelector('.information__block-text');
        info.classList.add('information__block-text_maxHeight');

        let readMore = document.querySelector('.information__block-more.info');
        readMore.classList.add('information__block-more_hidden');

        console.log(readMore)
    }
    else {
        /* Читать далее в блоке с фирмами */
        if (e.target.classList.contains('firma')) {
            text = document.querySelector('.information__more-text.firma');
            firma = document.querySelector('.repairBar__main.firma');
            icon = document.querySelector('.information__more-icon.firma')
        }

        /* Читать далее в блоке с моделями */
        if (e.target.classList.contains('model')) {
            text = document.querySelector('.information__more-text.model');
            firma = document.querySelector('.repairBar__main.model');
            icon = document.querySelector('.information__more-icon.model')
        }
        console.log(2)
        if (text.textContent === 'Показать все') {
            text.textContent = 'Скрыть';
            firma.classList.add('repairBar__main_expanded');
            icon.classList.add('information__more-icon_rotate');
        }
        else {
            text.textContent = 'Показать все';
            firma.classList.remove('repairBar__main_expanded');
            icon.classList.remove('information__more-icon_rotate');
        }
        console.log(3)
    }
}

/* Скрыть блок читать далее */
function Size(){
    let infoText = document.querySelector('.information__block-text');
    let infoMore = document.querySelector('.information__block-more.info');
    if( infoText.scrollWidth > infoText.offsetWidth || infoText.scrollHeight > infoText.offsetHeight){
        infoMore.classList.remove('information__block-more_hidden');
    }
    else{
        infoMore.classList.add('information__block-more_hidden');
    }
}

/* Расчет размера при загрузке документа */
document.addEventListener("DOMContentLoaded", function (){
    Size();

    let body = document.querySelector('body');
    body.addEventListener('resize', function (){
        Size();
    })

    let infoButton = document.querySelectorAll('.information__block-more');
        for(let i = 0; i < infoButton.length; i++){
            let elem = infoButton[i];
            elem.addEventListener('click', ReadMore);
        }
})
