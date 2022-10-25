/* Данные карточек фирм */
export let FirmCardsData = [
    {urlPick: './src/Assets/img/Lenovo.svg'},
    {urlPick: './src/Assets/img/Samsung.svg'},
    {urlPick: './src/Assets/img/Apple.svg'},
    {urlPick: './src/Assets/img/Bosch.svg'},
    {urlPick: './src/Assets/img/Hp.svg'},
    {urlPick: './src/Assets/img/Acer.svg'},
    {urlPick: './src/Assets/img/ViewSonic.svg'},
    {urlPick: './src/Assets/img/Sony.svg'},
    {urlPick: './src/Assets/img/Lenovo.svg'},
    {urlPick: './src/Assets/img/Samsung.svg'},
    {urlPick: './src/Assets/img/Apple.svg'}
];

/* Данные карточек моделей */
export let ModelCardsData = [
    {head: 'Ремонт ноутбуков'},
    {head: 'Ремонт планшетов'},
    {head: 'Ремонт ПК'},
    {head: 'Ремонт мониторов'},
    {head: 'Ремонт телефонов'},
    {head: 'Ремонт электронных книг'},
    {head: 'Ремонт электронных часов'},
];

/* Данные карточек прайса */
export let PriceCardsData = [
    {
        name: 'Ремонт услуги',
        price: 'Цена',
        time: 'Срок'
    },
    {
        name: 'Диагностика',
        price: 'Бесплатно',
        time: '30 мин'
    },
    {
        name: 'Замена дисплея',
        price: '1 000 ₽',
        time: '30-120 мин'
    },
    {
        name: 'Замена полифонического динамика',
        price: '1 000 ₽',
        time: '30-120 мин'
    },
    {
        name: 'Тестирование с выдачей технического заключения',
        price: '1 000 ₽',
        time: '30-120 мин'
    },
    {
        name: 'Замена программного обеспечения',
        price: '1 000 ₽',
        time: '30-120 мин'
    },
]

/* Создание карточек фирм */
export function Cards(array){

    let element;

    if(array === FirmCardsData){
        element = document.querySelector('.repairBar__main.firma');
    }
    if(array === ModelCardsData){
        element = document.querySelector('.repairBar__main.model');
    }
    if(array === PriceCardsData){
        element = document.querySelector('.repairBar__main.price');
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
        }
        if(array === PriceCardsData){

        }

        card.appendChild(card_button);
        element.appendChild(card);
    }
}

/* Создание прайса */
export function PriceCards(array){
    let element;

    element = document.querySelector('.repairBar__main.price');

    for (let i = 0; i < array.length; i++){

        let array_elem = array[i];

        let card = document.createElement('div');
        card.classList.add('repairBar__cardPrice');
        if(i === 0){
            card.classList.add('cardPrice_heading');
        }

        let name = document.createElement('span');
        name.classList.add('cellName');
        name.textContent = array_elem.name;

        let price = document.createElement('span');
        price.classList.add('cellPrice');
        price.textContent = array_elem.price;

        let time = document.createElement('span');
        time.classList.add('cellTime');
        time.textContent = array_elem.time;

        let button = document.createElement('button');
        button.classList.add('cellButton');
        button.classList.add('form__button');
        button.type = 'submit';
        button.textContent = 'ЗАКАЗАТЬ';

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(time);
        card.appendChild(button);

        element.appendChild(card);
    }
}

/* Создание карточек при загрузве документа */
/*document.addEventListener("DOMContentLoaded", function (){
    Cards(ModelCardsData);
    Cards(FirmCardsData);
    PriceCards(PriceCardsData);
})*/
