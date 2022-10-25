import Swiper, { Navigation, Pagination } from 'swiper'
import {ReadMore, Size} from "./src/Component/Information/information";
import {CloseMenu, OpenMenu} from "./src/Component/Menu/menu";
import {ClosePopupPanel, OpenPopupPanel} from "./src/Component/PopupPanel/popupPanel";
import {Cards, FirmCardsData, ModelCardsData, PriceCards, PriceCardsData} from "./src/Component/RepairBar/repairBar";
import './src/Component/Button/button.scss';
import './src/Component/Footer/footer.scss';
import './src/Component/Heading/heading.scss';
import './src/Component/Information/information.scss';
import './src/Component/Menu/menu.scss';
import './src/Component/Navigation/navigation.scss';
import './src/Component/PopupPanel/popupPanel.scss';
import './src/Component/RepairBar/repairBar.scss';
import './src/Component/SideBar/sidebar.scss';
import './src/Component/Slider/slider.scss';
import './src/variables.scss';
import './src/html.scss';


document.addEventListener("DOMContentLoaded", function (){
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


  let menuButton = document.querySelector('.menu__button.button.button_menu');
  menuButton.addEventListener('click', OpenMenu);

  let closeButtonMenu = document.querySelector('.menu__button.button.button_cancel')
  closeButtonMenu.addEventListener('click', CloseMenu);

  let blurMenu = document.querySelector('.blur');
  blurMenu.addEventListener('click', CloseMenu);


  let openButton = document.querySelectorAll('.openPopup');
  for (let i = 0; i < openButton.length; i++){
    openButton[i].addEventListener('click', OpenPopupPanel);
  }

  let closeButton = document.querySelectorAll('.closePopup');
  for (let i = 0; i < closeButton.length; i++){
    closeButton[i].addEventListener('click', ClosePopupPanel);
  }

  let blur = document.querySelector('.blur');
  blur.addEventListener('click', ClosePopupPanel);


  Cards(ModelCardsData);
  Cards(FirmCardsData);
  PriceCards(PriceCardsData);


  const screenWidth = window.screen.width * 0.0036;

  new Swiper('.priceSwiper', {
    // Параметры
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: window.screen.width * 0.0034,
    centeredSlides: true,

    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 320 * 0.0034,
        spaceBetween: 16,
      },
      355: {
        slidesPerView: 355 * 0.0034,
        spaceBetween: 16,
      },
      390: {
        slidesPerView: 390 * 0.0034,
        spaceBetween: 16,
      },
      425: {
        slidesPerView: 425 * 0.0034,
        spaceBetween: 16,
      },
      460: {
        slidesPerView: 460 * 0.0034,
        spaceBetween: 16,
      },
      495: {
        slidesPerView: 495 * 0.0034,
        spaceBetween: 16,
      },
      530: {
        slidesPerView: 530 * 0.0034,
        spaceBetween: 16,
      }
    }
  });
  new Swiper('.modelSwiper', {
    // Параметры
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: screenWidth,
    centeredSlides: true,

    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 320 * 0.0036,
        spaceBetween: 16,
      },
      355: {
        slidesPerView: 355 * 0.0036,
        spaceBetween: 16,
      },
      390: {
        slidesPerView: 390 * 0.0036,
        spaceBetween: 16,
      },
      425: {
        slidesPerView: 425 * 0.0036,
        spaceBetween: 16,
      },
      460: {
        slidesPerView: 460 * 0.0036,
        spaceBetween: 16,
      },
      495: {
        slidesPerView: 495 * 0.0036,
        spaceBetween: 16,
      },
      530: {
        slidesPerView: 530 * 0.0036,
        spaceBetween: 16,
      }
    }
  });
  new Swiper('.firmaSwiper', {
    // Параметры
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: screenWidth,
    centeredSlides: true,

    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 320 * 0.0036,
        spaceBetween: 16,
      },
      355: {
        slidesPerView: 355 * 0.0036,
        spaceBetween: 16,
      },
      390: {
        slidesPerView: 390 * 0.0036,
        spaceBetween: 16,
      },
      425: {
        slidesPerView: 425 * 0.0036,
        spaceBetween: 16,
      },
      460: {
        slidesPerView: 460 * 0.0036,
        spaceBetween: 16,
      },
      495: {
        slidesPerView: 495 * 0.0036,
        spaceBetween: 16,
      },
      530: {
        slidesPerView: 530 * 0.0036,
        spaceBetween: 16,
      }
    }
  });
})
