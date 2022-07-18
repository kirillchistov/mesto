// Импортируем классы  //
// До ревью без констант import { initialCards, validateConfig } from "./constants.js"; //
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
const elementTemplate = document.querySelector('#element-template').content;
const formCreateCard = document.querySelector('#formAddPlace');
const placeNameInput = document.querySelector('.popup__input_place_name');
const placeLinkInput = document.querySelector('.popup__input_place_link');
const btnCreateSubmit = document.querySelector('#btnPopupAddPlaceSubmit');

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
/*  popup.addEventListener('mousedown', handleCloseByOverlayOrButton); */
};

//  Функция закрытия попапа - удаляем класс и слушатель  //
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByKeydown);
/*  popup.removeEventListener('mousedown', handleCloseByOverlayOrButton); */
};

//  Закрытие через Escape - выделил функцию поиска открытого попапа //
/* const closeByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};
*/

//  Закрытие нажатием на Escape  //
const closeByKeydown = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = getOpenedPopup();
    closePopup(openedPopup);
  }
};

//  Закрытие по кнопке 'x' или overlay  //
/* function closeByOverlay(popup) {
  document.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
          closePopup(popup);
      }
  });
};
*/

//  Открытие попапов с формами  //

//  редактирование профиля с текущими данными, ошибки скрыты, кнопка активна  //
const openPopupEdit = () => {
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

//  Обработчик  форм  //

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
  const card = new Card(cardData, '#elementTemplate');
  return card.createCardElement();
};

//  вставка карточки в разметку  //
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
    console.log(evt.target)
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  });
});

initCards();

//  Субклассы для валидации форм на основе импортного класса FormValidator  //
const formEditValidator = new FormValidator(validateConfig, formProfile);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validateConfig, formCreateCard);
formAddValidator.enableValidation();

/*
const handleCloseByOverlayOrButton = (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('.popup__close')) {
    closePopup(evt.currentTarget);
  }
};
*/

//  Закрытие попапов по кнопке "x" - объединить с закрытием по оверлею //
/* const handleClickClosePopup = (evt) => {
  closePopup(evt.target.closest('.popup'));
};
*/

//  Закрытие по Esc для всех попапов //
/* popupList.forEach((currentPopup) => {
  closeByEsc(currentPopup);
});
*/

//  Открытие попапа редактирования профиля с текущими значениями - переписали //
/* function editProfile(popup) {
  validateProfile.resetValidation();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popup);
  validateProfile.toggleButtonState();
};
*/

//  Обработка события сохранения изменений в профиле с отменой перезагрузки - переписали //
/* function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};
*/

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


//  Добавления новой карточки места //
//  Создаем из импортированного класса Card на основе шаблона карточки  //
//  Генерируем и возвращаем объект со свойствами и методами родительского класса  //
//  Заполнение новых данных карточки cardData в обработчике отправки формы  //

/* const createCard = (cardData) => {
  const card = new Card(cardData, '#element-template', openImagePopup);
  
  const cardElement = card.generateCard();
  return cardElement;
};
*/

//  Вставляем новый элемент / карточку в галерею - переписали  //
/*
const addCard = (gallery, cardElement) => {
  gallery.prepend(cardElement);
};
*/

//  перенесли присвоение значений полей и функции внтурь класса //

//  Вставляем исходный массив карточек в галерею - переписали //
/* initialCards.forEach((card) => {
  const cardItem = createCard(card);
  gallery.prepend(cardItem);
});
*/

//  Функция очистки ошибок в форме - перенесли в класс //
/* const clearPopupFormErrors = (popup) => {
  const popupForm = popup.querySelector('.popup__form');
  if (!popupForm) {
    return popupForm;
  } else {
    popupForm.querySelectorAll('.popup__input').forEach(function(input) {
      input.classList.remove('popup__field-error_type');
    });
  }
  popupForm.querySelectorAll('.popup__field-error').forEach(function(errorItem) {
      errorItem.classList.remove('popup__field-error_active');
      errorItem.textContent = '';
  });
};
*/

//  Удаление карточки места - перенесли в класс Card  //
/*
const deleteItem = (item) => {
  item.querySelector('.element__button-delete').addEventListener('click', evt => {
    evt.target.closest('.element').remove();
  });
};
*/

//  Изменение кнопки Like при клике - перенесли в класс Card //
/* 
const toggleLike = (item) => {
  item.querySelector('.element__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__button-like_active');
  })
};
*/

//  Обработка отправки формы нового места  //
//  Отключаем обнуление данных по умолчанию  //
//  Создаем объект с данными карточки - имя и ссылка  //
//  Вызываем метод создания новой карточки с введенными данными  //
//  Вставляем новую карточку в начало галереи и закрываем попап //

/* 
const handleSubmitAddPlace = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  const cardElement = createCard(cardData);
  addCard(gallery, cardElement);
  validateCard.toggleButtonState();
  closePopup(popupAdd);
};  
*/

//  Переименовали и перенесли свойства и методы карточки внутрь класса Card  //

//  Включаем валидацию форм с использованием нового импортного класса FormValidator  //
//  Создаем массив форм, для каждой (по имени формы) включаем валидацию  //
//  Вместо перебора наборов полей fieldset, используем объект validator  // 
/*
const activateValidation = () => {
  const formList = Array.from(document.querySelectorAll(validateConfig.formSelector));
  formList.forEach((formElement) => {
      const validator = new FormValidator(formElement, validateConfig);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
  });
};
*/

//  Создаем субклассы класса FormValidator для валидации форм профиля и места  //
/*
const validateProfile = new FormValidator(validateConfig, formProfile);
validateProfile.enableValidation();

const validateCard = new FormValidator(validateConfig, formCreateCard);
validateCard.enableValidation();
*/


//  Блок подписки на события кликов и отправок форм

//  Закрытие по клику мыши по оверлею или кнопке для всех попапов //
/* popupList.forEach((currentPopup) => {
  currentPopup.addEventListener('mousedown', handleCloseByOverlayOrButton);
});
*/

//  Подписка на события кликов по кнопкам в профиле: //
/* btnEdit.addEventListener('click', () => {
  formValidators['profileEdit'].resetValidation();
  editProfile(popupEdit);
});
*/

// Подписка на клик по кнопке "+" для создания новой карточки  //
/* btnAdd.addEventListener('click', () => {
  formCreateCard.reset();
  formValidators['addPlace'].resetValidation();  
  openPopup(popupAdd);
});
*/

//  Подписка на события отправки форм профиля и Нового места //
/*
formProfile.addEventListener('submit', handleSubmitProfileForm);
formCreateCard.addEventListener('submit', handleSubmitAddPlace);
*/

//  Подписка на событие клика по кнопке "x" //
/* btnsClose.forEach(button => {
  button.addEventListener('click', handleClickClosePopup);
});
*/

//  Включаем функцию валидации 
/* 
activateValidation();
*/