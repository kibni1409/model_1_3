let FirmCardsData = [
    {
        urlPick: './../../img/Lenovo.svg'
    },
    {
        urlPick: './../../img/Samsung.svg'
    },
    {
        urlPick: './../../img/Apple.svg'
    }
    ];

function FirmCards(){

    let FirmCardsData = [
        {
            urlPick: 'src/img/Lenovo.svg'
        },
        {
            urlPick: 'src/img/Samsung.svg'
        },
        {
            urlPick: 'src/img/Apple.svg'
        },
        {
            urlPick: 'src/img/Bosch.svg'
        },
        {
            urlPick: 'src/img/Hp.svg'
        },
        {
            urlPick: 'src/img/Acer.svg'
        },
        {
            urlPick: 'src/img/ViewSonic.svg'
        },
        {
            urlPick: 'src/img/Sony.svg'
        }
    ];



    let element = document.querySelector('.repairBar__main.firma');
    console.log(element)

    for (let i = 0; i <= FirmCardsData.length; i++){
        let array_elem = FirmCardsData[i];
        let card = document.createElement('div');
        card.classList.add('repairBar__card');
        card.classList.add('cardFirm');

        let card_img = document.createElement('img');
        card_img.classList.add('repairBar__icon')
        card_img.src = array_elem.urlPick;
        card_img.alt = array_elem.urlPick;
        card.appendChild(card_img);

        let card_button = document.createElement('div');
        card_button.classList.add('repairBar__button');
        card.appendChild(card_button);

        console.log(card);
        element.appendChild(card);
    }
}

