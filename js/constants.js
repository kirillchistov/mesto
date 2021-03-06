//  Исходный набор карточек  //
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Карачаевск',
    link: 'https://kirillchistov.github.io/mesto/images/karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://kirillchistov.github.io/mesto/images/elbrus.jpg'
  },
  {
    name: 'Домбай',
    link: 'https://kirillchistov.github.io/mesto/images/dombai.jpg'
  }
];

//  Селекторы для валидации форм  //
export const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputFieldSet: '.popup__fieldset',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__field-error_type',
  errorClass: 'popup__field-error_active'
};