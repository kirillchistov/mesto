// Импортируем классы  //
// До ревью без констант import { initialCards, validateConfig } from "./constants.js";  //
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//  Кнопки в профиле  //
const btnEdit = document.querySelector('.profile__button-edit');
const btnAdd = document.querySelector('.profile__button-add');

//   Попап редактирования профиля  //
const popupEdit = document.querySelector('#popupProfile');
const formProfile = document.querySelector('#formProfileEdit');
const nameInput = document.querySelector('.popup__input_user_name');
const jobInput = document.querySelector('.popup__input_user_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//  Попап добавления нового места //
const popupAdd = document.querySelector('#popupAddPlace');
const gallery = document.querySelector('.elements');
const formCreateCard = document.querySelector('#formAddPlace');
const placeNameInput = document.querySelector('.popup__input_place_name');
const placeLinkInput = document.querySelector('.popup__input_place_link');
const btnCreateSubmit = document.querySelector('#btnPopupAddPlaceSubmit');

/* const elementTemplate = document.querySelector('#element-template').content; // пока не используется*/

//  Попап открытия карточки места //
export const popupElement = document.querySelector('#popupElement');
export const popupImage = popupElement.querySelector('.popup__image');
export const popupImageCaption = popupElement.querySelector('.popup__image-caption');

//  Глобальные константы  //
const page = document.querySelector('.page');

// Все попапы в документе //
const popupList = Array.from(document.querySelectorAll('.popup'));

//  Все кнопки закрытия попапов //
const btnsClose = document.querySelectorAll('.popup__close');

//  Все картинки карточек  //
const imgElements = document.querySelectorAll('.element__image');

//  Исходный набор карточек  //
const initialCards = [
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

//  Создаем пустой объект для инициализации переменной FormValidators //
const formValidators = {};

//  Ищем открытый попап по наличию класса  //
const getOpenedPopup = () => {
  return page.querySelector('.popup_opened');
};

//  Функция открытия попапа - добавляем класс, вешаем слушатель  //
export const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByKeydown);
};

//  Функция закрытия попапа - удаляем класс и слушатель  //
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByKeydown);
};

//  Закрытие нажатием на Escape  //
const closeByKeydown = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = getOpenedPopup();
    closePopup(openedPopup);
  }
};

//  Открытие попапов с формами  //

//  редактирование профиля с текущими данными, ошибки скрыты, кнопка активна  //
function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  formEditValidator.hideErrors();
  formEditValidator.activateSubmitButton();
  openPopup(popupEdit);
};

//  создание карточки места с настройками из шаблона  //
const openPopupAdd = () => {
  openPopup(popupAdd);
};

//  Субклассы для валидации форм на основе импортного класса FormValidator  //
const formEditValidator = new FormValidator(validateConfig, formProfile);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validateConfig, formCreateCard);
formAddValidator.enableValidation();

//  Обработчики  форм  //

//  сохранение данных профиля с отменой перезагрузки, сохранением данных из полей ввода  //
const handleSubmitProfileForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

//  добавление новой карточки с отменой перезагрузки, сохранением данных карточки  //
//  затем генерируем и вставляем карточку, очищаем поля ввода, деактивируем кнопку  //
const handleSubmitAddPlace = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };
  insertCard(generateCard(cardData));
  formCreateCard.reset();
  formAddValidator.deactivateSubmitButton();
  closePopup(popupAdd);
};

//  добавление карточки из шаблона класса Card  //
const generateCard = (cardData) => {
  const card = new Card(cardData, '#element-template');
  return card.createCardElement();
};

//  вставка карточки в начало разметки  //
const insertCard = (cardElement) => {
  gallery.prepend(cardElement);
};

//  вставка дефолтного блока карточек  //
const initCards = () => {
  initialCards.forEach((cardData) => {
    const cardElement = generateCard(cardData);
    insertCard(cardElement);
  });
};

//  СЛУШАТЕЛИ СОБЫТИЙ  //
//  кнопка редактирования профиля в профиле  //
btnEdit.addEventListener('click', openPopupEdit);

//  кнопка "+" добавления карточки места в профиле  //
btnAdd.addEventListener('click', openPopupAdd);

//  кнопка сохранения в попапе формы профиля  //
formProfile.addEventListener('submit', handleSubmitProfileForm);

//  кнопка сохранения в попапе создания новой карточки  //
formCreateCard.addEventListener('submit', handleSubmitAddPlace);

//  все попапы - для закрытия по оверлею или клику на кнопку "x")  //
popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  });
});

//  вызов вставки дефолтного блока карточек  //
initCards();


//  Открытие попапа с картинкой  //
/* 
const openImagePopup = (link, title) => {
/* /*  image.querySelector('.popup__image').addEventListener('click', evt => { */ 
/*  popupImage.src = '';
  popupImage.src = link;
  popupImage.alt = title;
  popupImage.title = title;
  popupImageCaption.textContent = title;
  openPopup(popupElement);
/*  }); */
/* }; */