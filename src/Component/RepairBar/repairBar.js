/* Данные карточек фирм */
let FirmCardsData = [
    {urlPick: 'src/img/Lenovo.svg'},
    {urlPick: 'src/img/Samsung.svg'},
    {urlPick: 'src/img/Apple.svg'},
    {urlPick: 'src/img/Bosch.svg'},
    {urlPick: 'src/img/Hp.svg'},
    {urlPick: 'src/img/Acer.svg'},
    {urlPick: 'src/img/ViewSonic.svg'},
    {urlPick: 'src/img/Sony.svg'}
];

/* Данные карточек моделей */
let ModelCardsData = [
    {head: 'Ремонт ноутбуков'},
    {head: 'Ремонт планшетов'},
    {head: 'Ремонт ПК'},
    {head: 'Ремонт мониторов'},
    {head: 'Ремонт телефонов'},
    {head: 'Ремонт электронных книг'},
    {head: 'Ремонт электронных часов'},
];

/* Создание карточек фирм */
function Cards(array){

    let element;

    if(array === FirmCardsData){
            element = document.querySelector('.repairBar__main.firma');
        }
    if(array === ModelCardsData){
            element = document.querySelector('.repairBar__main.model');
        }

    for (let i = 0; i < array.length; i++){

        let array_elem = array[i];

        let card = document.createElement('div');
        card.classList.add('repairBar__card');

        let card_button = document.createElement('div');
        card_button.classList.add('repairBar__button');

        if(array === FirmCardsData){
            card.classList.add('cardFirm');

            let card_img = document.createElement('img');
            card_img.classList.add('repairBar__icon')
            card_img.src = array_elem.urlPick;
            card_img.alt = array_elem.urlPick;
            card.appendChild(card_img);
        }
        if(array === ModelCardsData){
            card.classList.add('cardModel');

            let card_span = document.createElement('span');
            card_span.classList.add('repairBar__text');
            card_span.textContent = array_elem.head;
            card.appendChild(card_span);
            card_button.classList.add('cardModel');
        }

        card.appendChild(card_button);
        element.appendChild(card);
    }
}


