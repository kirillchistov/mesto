//  Переносим index.js в /pages  //
//  Здесь должны остаться только создание классов и добавление обработчиков  //

//  Импортируем в него все классы  //
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

//  Импортируем стили из index.css  //
import "./index.css";

//  Импортируем все константы из /utils/constants.js  //
import {
  initialCards,
  validateConfig,
/*  popupEdit, */
  btnEdit,
/*  profileName,
  profileJob, */
  nameInput,
  jobInput,
/*  popupAdd, 
  placeNameInput,
  placeLinkInput, */
  btnAdd,
/*  gallery, */
/*  popupElement, */
/*  popupImage, */
  formValidators
} from "../utils/constants.js";

//  Создаем экземпляр попапа с карточкой  //
const popupImage = new PopupWithImage('#popupElement');
popupImage.setEventListeners();

//  Открываем попап места при клике на фото  //
const handleCardClick = (link, name) => {
  popupImage.open(link, name);
};

//  Генерируем карточку (из шаблона) и возвращаем  //
const createCard = (cardData) => {
  const card = new Card(cardData, '#element-template', handleCardClick);
  return card.createCardElement();
};

//  Создаем экземпляр секции (рендеринг карточки)  //
const cardsSection = new Section( 
  {
    items: initialCards,
    renderer: (cardData) => {
      cardsSection.addItem(createCard(cardData));
    }
  },
  '.elements'
);

//  Загружаем  исходный набор карточек  //
cardsSection.renderItems(initialCards);

//  Обрабатываем клик по кнопке сохранения новой карточки места  //
const handleFormAddPlaceSubmit = (cardData) => {
  cardsSection.addItem(createCard(cardData));
  popupNewPlace.close();
};

//  Создаем экземпляр попапа с формой для добавления карточки места  //
const popupNewPlace = new PopupWithForm('#popupAddPlace', handleFormAddPlaceSubmit);
popupNewPlace.setEventListeners();


//  Создаем экземпляр класса UserInfo с данными профиля  //
const profileInfo = new UserInfo('.profile__name', '.profile__job');

//  Обрабатываем сохранение данных профиля  //
const handleFormProfileSubmit = (userInfo) => {
  profileInfo.setUserInfo(userInfo);
  popupProfile.close();
};

//  Создаем экземпляр попапа профиля  //
const popupProfile = new PopupWithForm('#popupProfile', handleFormProfileSubmit);
popupProfile.setEventListeners();

//  Включаем валидацию  //
const activateValidation = () => {
  const formList = Array.from(document.querySelectorAll(validateConfig.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(validateConfig, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

//  Подключаем слушатели на кнопки в профиле  //

btnEdit.addEventListener("click", () => {
  const { profileName, profileJob } = profileInfo.getUserInfo();
  nameInput.value = profileName;
  jobInput.value = profileJob;
  formValidators["profileEdit"].resetValidation();
  popupProfile.open();
});

btnAdd.addEventListener("click", () => {
  formValidators["addPlace"].resetValidation();
  popupNewPlace.open();
});

//  Вызываем валидацию  //

activateValidation();