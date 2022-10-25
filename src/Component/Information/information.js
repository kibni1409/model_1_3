/* Развертка */
export function ReadMore(e) {
    let text;
    let firma;
    let icon;

    /* Читать далее в блоке информации */
    if (e.target.classList.contains('info')){

        let info = document.querySelector('.information__blockText');
        info.classList.add('information__blockText_maxHeight');

        let readMore = document.querySelector('.information__blockMore.info');
        readMore.classList.add('information__blockMore_hidden');
    }
    else {
        /* Читать далее в блоке с фирмами */
        if (e.target.classList.contains('firma')) {
            text = document.querySelector('.information__moreText.firma');
            firma = document.querySelector('.repairBar__main.firma');
            icon = document.querySelector('.information__moreIcon.firma')
        }

        /* Читать далее в блоке с моделями */
        if (e.target.classList.contains('model')) {
            text = document.querySelector('.information__moreText.model');
            firma = document.querySelector('.repairBar__main.model');
            icon = document.querySelector('.information__moreIcon.model')
        }
        if (text.textContent === 'Показать все') {
            text.textContent = 'Скрыть';
            firma.classList.add('repairBar__main_expanded');
            icon.classList.add('information__moreIcon_rotate');
        }
        else {
            text.textContent = 'Показать все';
            firma.classList.remove('repairBar__main_expanded');
            icon.classList.remove('information__moreIcon_rotate');
        }
    }
}

/* Скрыть блок читать далее */
export function Size(){
    let infoText = document.querySelector('.information__blockText');
    let infoMore = document.querySelector('.information__blockMore.info');
    if( infoText.scrollWidth > infoText.offsetWidth || infoText.scrollHeight > infoText.offsetHeight){
        infoMore.classList.remove('information__blockMore_hidden');
    }
    else{
        infoMore.classList.add('information__blockMore_hidden');
    }
}

/* Расчет размера при загрузке документа */
/*document.addEventListener("DOMContentLoaded", function (){
    Size();

    let body = document.querySelector('body');
    body.addEventListener('resize', function (){
        Size();
    })

    let infoButton = document.querySelectorAll('.information__blockMore');
        for(let i = 0; i < infoButton.length; i++){
            let elem = infoButton[i];
            elem.addEventListener('click', ReadMore);
        }
})
*/
