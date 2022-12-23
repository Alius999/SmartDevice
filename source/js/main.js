import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import Inputmask from './inputmask';
import JustValidate from './just-validate.es';
import IMask from './imask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

const header = document.querySelector('.header');

const accordeonButton = document.querySelector('.footer-menu__control');
const footerMenuWrapper = document.querySelector('.footer-menu__clickarea');
const plusButton = document.querySelector('.footer-menu__control-open');
const minusButton = document.querySelector('.footer-menu__control-close');
const footerList = document.querySelector('.footer-menu__list');

const accordeonIcon = document.querySelector('.footer-contacts__accordeon-icon');
const footerContactsWrapper = document.querySelector('.footer-contacts__pointer');
const contactsList = document.querySelector('.footer-contacts__list');
const plusButtonContacts = document.querySelector('.footer-contacts__plus');
const minusButtonContacts = document.querySelector('.footer-contacts__minus');

const aboutButton = document.querySelector('.about__button');
const aboutText = document.querySelector('.about__text');
const textAfterDivider = document.querySelector('.about__text--after-divider');
const textAfterDividerMobile = document.querySelector('.about__text--after-divider-mobile');

const closeModal = document.querySelector('.modal-window__close');
const modalWindow = document.querySelector('.modal-window');
const headerCallBack = document.querySelector('.header__calback');
const modalWrapper = document.querySelector('.modal-window__wrapper');

const goodsHeader = document.querySelector('.goods__header');
const goodsHeaderMobile = goodsHeader.dataset.mobileText;

const firstScreenButton = document.querySelector('.first-screen__container-button');
const firstScreenButtonMobile = firstScreenButton.dataset.firstScreenButtonMobile;

const featuresItemReg = document.querySelectorAll('.features__item--regular');
const feturesItemFirst = document.querySelector('.features__item--first');

// Убираем синий фон с первой фичи, при наведении на другие

featuresItemReg.forEach((item) => {
  item.addEventListener('mouseover', () => {
    feturesItemFirst.classList.remove('features__item--active');
    console.log('Hello');
  })
})

// Без JS

footerList.classList.remove('footer-menu__list--no-js');
contactsList.classList.remove('footer-contacts__list--no-js');

// Маска телефона

// let selector = document.querySelector('.feedback-form__phone');
// let im = new Inputmask('+7 (999) 999-99-99');

// im.mask(selector);

// var phoneMask = IMask(
//   document.getElementById('feedback-form__phone'), {
//     mask: '+{7}(000)000-00-00'
//   });

var element = document.querySelector('.feedback-form__phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  minLength: 5,
};
var mask = IMask(element, maskOptions);


// Маска телефона для модального окна

let selectorModal = document.querySelector('.modal-window__phone');
let imModal = new Inputmask('+7 (999) 999-99-99');

imModal.mask(selectorModal);

// Валидация формы

const validation = new JustValidate('#feedback-form', {
  errorFieldCssClass: 'is-invalid',
});

validation
    .addField('#feedback-form__name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'В имени должно быть больше трёх букв',
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Укажите Ваше имя',
      }
    ])
    .addField('#agreement', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться с правилами',
      }
    ])
    .addField('#feedback-form__phone', [
      {
        rule: 'required',
        errorMessage: 'Укажите Ваш телефон',
      },
      {
        rule: 'minLength',
        value: 16,
        errorMessage: 'Неверный формат',
      },
      {
        rule: 'maxLength',
        value: 18,
      }
    ])
    .onSuccess((event) => {
      document.getElementById("feedback-form").submit();
  });

// // Валидация модального окна

const validationModal = new JustValidate('#modal-window');

validationModal
    .addField('#modal-window__name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'В имени должно быть больше трёх букв',
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Укажите Ваше имя',
      }
    ])
    .addField('#modal-agreement', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться с правилами',
      }
    ])
    .addField('#modal-window__phone', [
      {
        rule: 'required',
        errorMessage: 'Укажите Ваш телефон',
      },
      {
        rule: 'minLength',
        value: 16,
        errorMessage: 'Неверный формат',
      },
      {
        rule: 'maxLength',
        value: 18,
      }
    ])

.onSuccess((event) => {
  document.getElementById("modal-window").submit();
});

// Фиксация header в desktop

if (window.matchMedia('(min-width: 1024px)').matches) {
  header.style.position = 'sticky';
  header.style.top = '0';
}

  footerMenuWrapper.addEventListener('click', () => {
    if (contactsList.classList.contains('footer-contacts__display')) {
      plusButtonContacts.style['display'] = '';
      minusButtonContacts.style['display'] = '';
      contactsList.style['display'] = '';
      plusButtonContacts.classList.toggle('footer-contacts__no-display');
      minusButtonContacts.classList.toggle('footer-contacts__display');
      contactsList.classList.toggle('footer-contacts__display');
    }
    plusButton.classList.toggle('footer-menu__no-display');
    minusButton.classList.toggle('footer-menu__display');
    footerList.classList.toggle('footer-menu__display');
  });

  footerContactsWrapper.addEventListener('click', () => {
    if (footerList.classList.contains('footer-menu__display')) {
      plusButton.style['display'] = '';
      minusButton.style['display'] = '';
      footerList.style['display'] = '';
      plusButton.classList.toggle('footer-menu__no-display');
      minusButton.classList.toggle('footer-menu__display');
      footerList.classList.toggle('footer-menu__display');
    }
    plusButtonContacts.classList.toggle('footer-contacts__no-display');
    minusButtonContacts.classList.toggle('footer-contacts__display');
    contactsList.classList.toggle('footer-contacts__display');
  });

// Регулировка текста о компании

if (window.matchMedia('(max-width: 767px)').matches) {
  aboutButton.addEventListener('click', () => {
    aboutText.classList.toggle('about__click');
    if (aboutText.classList.contains('about__click')) {
      textAfterDivider.style.display = 'inline';
      textAfterDividerMobile.style.display = 'inline';
      aboutButton.textContent = 'Свернуть';
    } else if (!aboutText.classList.contains('about__click')) {
      textAfterDivider.style.display = 'none';
      textAfterDividerMobile.style.display = 'none';
      aboutButton.textContent = 'Подробнее';
    }
  });
}

if (window.matchMedia('(min-width: 768px)').matches) {
  aboutButton.addEventListener('click', () => {
    aboutText.classList.toggle('about__click');
    if (aboutText.classList.contains('about__click')) {
      textAfterDivider.style.display = 'inline';
      aboutButton.textContent = 'Свернуть';
    } else if (!aboutText.classList.contains('about__click')) {
      textAfterDivider.style.display = 'none';
      // textAfterDividerMobile.style.display = 'inline';
      aboutButton.textContent = 'Подробнее';
    }
  });
}

if (window.matchMedia('(max-width: 767px)').matches) {
  goodsHeader.textContent = goodsHeaderMobile;
  // console.log(goodsHeaderMobile);
  // firstScreenButton.textContent = firstScreenButtonMobile;
}

if (window.matchMedia('(max-width: 767px)').matches) {
  // goodsHeader.textContent = goodsHeaderMobile;
  firstScreenButton.textContent = firstScreenButtonMobile;
}

window.addEventListener('resize', function(event) {
  if (window.matchMedia('(max-width: 767px)').matches) {
    goodsHeader.textContent = goodsHeaderMobile;
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    goodsHeader.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
}, true);

window.addEventListener('resize', function(event) {
  if (window.matchMedia('(max-width: 767px)').matches) {
    firstScreenButton.textContent = firstScreenButtonMobile;
    footerList.classList.add('footer-menu__no-display');
    contactsList.classList.add('footer-contacts__no-display');
  }



  if (window.matchMedia('(max-width: 767px)').matches) {
    textAfterDividerMobile.style.display = 'none';
  }

  // if (window.matchMedia('(max-width: 767px)').matches) {
  //   aboutButton.addEventListener('click', () => {
  //     aboutText.classList.toggle('about__click');
  //     if (aboutText.classList.contains('about__click')) {
  //       textAfterDivider.style.display = 'inline';
  //       textAfterDividerMobile.style.display = 'inline';
  //       aboutButton.textContent = 'Свернуть';
  //     } else if (!aboutText.classList.contains('about__click')) {
  //       textAfterDivider.style.display = 'none';
  //       textAfterDividerMobile.style.display = 'none';
  //       aboutButton.textContent = 'Подробнее';
  //     }
  //   });
  // }

  if (window.matchMedia('(min-width: 768px)').matches) {
    textAfterDividerMobile.style.display = 'inline';
  }


  // if (window.matchMedia('(min-width: 768px)').matches) {
  //   aboutButton.addEventListener('click', () => {
  //     aboutText.classList.toggle('about__click');
  //     if (aboutText.classList.contains('about__click')) {
  //       textAfterDivider.style.display = 'none';
  //       aboutButton.textContent = 'Свернуть';
  //     } else if (!aboutText.classList.contains('about__click')) {
  //       textAfterDivider.style.display = 'inline';
  //       // textAfterDividerMobile.style.display = 'inline';
  //       aboutButton.textContent = 'Подробнее';
  //     }
  //   });
  // }


  if (window.matchMedia('(min-width: 768px)').matches) {
    firstScreenButton.textContent = 'Получить бесплатную консультацию';
    footerList.classList.remove('footer-menu__no-display');
    contactsList.classList.remove('footer-contacts__no-display');
  }

  if (window.matchMedia('(min-width: 1024px)').matches) {
    header.style.position = 'sticky';
    header.style.top = '0';
  }

  if (window.matchMedia('(max-width: 1023px)').matches) {
    header.style.position = 'relative';
  }

}, true);

if (window.matchMedia('(min-width: 768px)').matches) {
  contactsList.classList.remove('footer-contacts__no-display');
  footerList.classList.remove('footer-menu__no-display');
}

// Модальное окно

headerCallBack.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  document.getElementById('modal-window__name').focus();
  document.body.style.overflow = 'hidden'
});

closeModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  document.body.style.overflow = 'auto'
});

modalWindow.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(modalWrapper);

  if (!withinBoundaries) {
    modalWindow.style.display = 'none'; // Cкрываем элемент т.к. клик был за его пределами
    document.body.style.overflow = 'auto'
  }
});

// Закрытие модалки по ESC

document.body.addEventListener('keyup', function (e) {
  let key = e.keyCode;
  if (key == 27) {
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'auto'
  };
}, false);
