import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

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

const accordeonButton = document.querySelector('.footer-menu__accordeon-button');
const footerList = document.querySelector('.footer-menu__list');

const plusButton = document.querySelector('.footer-menu__accordeon-plus');
const minusButton = document.querySelector('.footer-menu__accordeon-minus');

const accordeonButtonContacts = document.querySelector('.footer-contacts__accordeon-button');
const contactsList = document.querySelector('.footer-contacts__list');

const plusButtonContacts = document.querySelector('.footer-contacts__accordeon-plus');
const minusButtonContacts = document.querySelector('.footer-contacts__accordeon-minus');

const aboutButton = document.querySelector('.about__button');
const aboutText = document.querySelector('.modal-form__close');
const textAfterDivider = document.querySelector('.about__text--after-divider');
const textAfterDividerMobile = document.querySelector('.about__text--after-divider-mobile');

const closeModal = document.querySelector('.modal-form__close');
const modalWindow = document.querySelector('.modal-form');
const headerCallBack = document.querySelector('.header__calback');
const modalWrapper = document.querySelector('.modal-form__wrapper');

const feedbackForm = document.querySelector('.feedback-form');
const feedbackName = document.querySelector('.feedback-form__name');

// Без JS

footerList.classList.remove('footer-menu__list--no-js');
contactsList.classList.remove('footer-contacts__list--no-js');

// Маска телефона

let selector = document.querySelector('.feedback-form__phone');
let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);

// Маска телефона для модального окна

let selectorModal = document.querySelector('.modal-form__phone');
let imModal = new Inputmask('+7 (999) 999-99-99');

imModal.mask(selectorModal);

// Валидация формы

const validation = new JustValidate('#feedback-form');

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
    },
  ])
  .addField('#agreement', [
    {
      rule: 'required',
      errorMessage: 'Вы должны согласиться с правилами',
    },
  ])
  .addField('#feedback-form__phone', [
    {
      rule: 'required',
      errorMessage: 'Укажите Ваш телефон',
    },
    {
      rule: 'maxLength',
      value: 18,
    },
  ]);

// Валидация модального окна

const validationModal = new JustValidate('#modal-form');

validationModal
  .addField('#modal-form__name', [
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
    },
  ])
  .addField('#modal-agreement', [
    {
      rule: 'required',
      errorMessage: 'Вы должны согласиться с правилами',
    },
  ])
  .addField('#modal-form__phone', [
    {
      rule: 'required',
      errorMessage: 'Укажите Ваш телефон',
    },
    {
      rule: 'maxLength',
      value: 18,
    },
  ]);

// Фиксация header в desktop

if (window.matchMedia('(min-width: 1028px)').matches) {
  header.style.position = 'sticky';
  header.style.top = '0';
}


accordeonButton.addEventListener('click', () => {
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

accordeonButtonContacts.addEventListener('click', () => {
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

if(window.matchMedia('(max-width: 768px)').matches) {
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


if(window.matchMedia('(min-width: 768px)').matches) {
  aboutButton.addEventListener('click', () => {
    aboutText.classList.toggle('about__click');
    if (aboutText.classList.contains('about__click')) {
      textAfterDivider.style.display = 'inline';
      aboutButton.textContent = 'Свернуть';
    } else if (!aboutText.classList.contains('about__click')) {
      textAfterDivider.style.display = 'none';
      aboutButton.textContent = 'Подробнее';
    }
  });
}

// Модальное окно

headerCallBack.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  document.getElementById('modal-form__name').focus();
});

closeModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
});

modalWindow.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(modalWrapper);
 
	if ( ! withinBoundaries ) {
		modalWindow.style.display = 'none'; // скрываем элемент т к клик был за его пределами
	}
});
