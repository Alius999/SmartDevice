// Маска телефона

var element = document.querySelector('.feedback-form__phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  minLength: 5,
};
var mask = IMask(element, maskOptions);


// Маска телефона для модального окна

var element = document.querySelector('.modal-window__phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  minLength: 5,
};
var mask = IMask(element, maskOptions);

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

const validationModal = new JustValidate('#modal-window__wrapper');

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
  document.getElementById("modal-window__wrapper").submit();
});
