//  Переносим index.js в /pages  //
//  Здесь должны остаться только создание классов и добавление обработчиков  //

//  Импортируем в него все классы  //
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

//  Импортируем новые классы Api и PopupWithConfirm  //
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

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
  btnEditAvatar,
  
/*  gallery, */
/*  popupElement, */
/*  popupImage, */
  popupConfirmDelete,
  popupEditAvatar,
  formValidators
} from "../utils/constants.js";

//  Объявляем переменную для юзера  //
let userId;

//  Создаем объект для API-доступа к серверу с полученным ключом в заголовке  //
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-47",
  headers: {
    authorization: "7a2b5691-9c91-496f-b370-fd3cc1ce7210",
    "Content-Type": "application/json",
  },
});

//  Создаем экземпляр попапа с карточкой  //
const popupImage = new PopupWithImage('#popupElement');
popupImage.setEventListeners();

//  Открываем попап места при клике на фото  //
const handleCardClick = (link, name) => {
  popupImage.open(link, name);
};

//  Генерируем карточку (из шаблона) и возвращаем  //
//  Получаем данные с сервера, включая id карточки, автора и пользователя, лайки  //
const createCard = (cardData) => {
  const card = new Card(
    {
      name: cardData.name,
      link: cardData.link,
      likes: cardData.likes,
      userId: userId,
      ownerId: cardData.owner._id,
      cardId: cardData._id
    },
    '#element-template', 
    handleCardClick,
    () => popupConfirm.open(card),
    () => {
      return api
        .addLike(cardData)
        .then((res) => {
          card.setLikesCount(res);
          card.addLike();
        })
        .catch((err) => {
          console.log('Ошибка: ' + err);
        })
    },
    () => {
      return api
        .deleteLike(cardData)
        .then((res) => {
          card.setLikesCount(res);
          card.removeLike();
        })
    }
  );
  
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

//  Загружаем исходный набор карточек - отключаем локальный массив  //
/* cardsSection.renderItems(initialCards); */

//  Обрабатываем клик по кнопке сохранения новой карточки места  //
//  Перед обработкой вызова по API показываем пользователю UX-текст  //
const handleFormAddPlaceSubmit = (cardData) => {
  popupNewPlace.handleButtonText(true);
  return api
  .addCard(cardData)
  .then((card) => {
    cardsSection.addItem(createCard(card));
    popupNewPlace.close();
  })
  .catch((err) => {
    console.log('Ошибка: ' + err);
  });
};

//  Создаем экземпляр попапа с формой для добавления карточки места  //
const popupNewPlace = new PopupWithForm('#popupAddPlace', handleFormAddPlaceSubmit);
popupNewPlace.setEventListeners();

const popupConfirm = new PopupWithConfirm(
  popupConfirmDelete,
  handlePopupConfirmSubmit
);
popupConfirm.setEventListeners();

//  Обрабатываем клик по кнопке удаления карточки места  //
const handlePopupConfirmSubmit = (card) => {
  return api
    .deleteCard(card._cardId)
    .then(() => {
      card.deleteCard();
      popupConfirm.close();
    })
    .catch((err) => console.log('Ошибка: ' + err));
};

//  Создаем экземпляр класса UserInfo с данными профиля  //
const profileInfo = new UserInfo('.profile__name', '.profile__job', '.profile__avatar');

//  Обрабатываем сохранение данных профиля, забираем данные по API  //
//  Перед обработкой вызова по API показываем пользователю UX-текст  //
const handleFormProfileSubmit = (userInfo) => {
  popupProfile.handleButtonText(true);
  return api
    .setProfile(userInfo)
    .then((res) => {
      profileInfo.setUserInfo(res);
      popupProfile.close();
    })
    .catch((err) => console.log('Ошибка: ' + err));
};

//  Создаем экземпляр попапа профиля  //
const popupProfile = new PopupWithForm('#popupProfile', handleFormProfileSubmit);
popupProfile.setEventListeners();


//  Обрабатываем сохранение аватара профиля, забираем данные по API  //
//  Перед обработкой вызова по API показываем пользователю UX-текст  //
const handleFormAvatarSubmit = (obj) => {
  popupAvatar.handleButtonText(true);
  return api
    .setAvatar(obj)
    .then((link) => {
      profileInfo.setUserInfo(link);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log('Ошибка: ' + err);
    });
};

const popupAvatar = new PopupWithForm(popupEditAvatar, handleFormAvatarSubmit);
popupAvatar.setEventListeners();

//  Получаем значение userId и карточки для этого юзера через API (промисом)  //
Promise.all([api.getCards(), api.getProfile()])
  .then((value) => {
    userId = value[1]._id;
    cardsSection.renderItems(value[0].reverse());
    profileInfo.setUserInfo(value[1]);
  })
  .catch((err) => {
    console.log('Ошибка: ' + err);
  });


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
//  Редактирование профиля  //
btnEdit.addEventListener("click", () => {
  const userInfo = profileInfo.getUserInfo();
  nameInput.value = userInfo.profileName;
  jobInput.value = userInfo.profileJob;
  formValidators["profileEdit"].resetValidation();
  popupProfile.handleButtonText(false);  
  popupProfile.open();
});

//  Добавление новой карточки места  //
btnAdd.addEventListener("click", () => {
  formValidators["addPlace"].resetValidation();
  popupNewPlace.handleButtonText(false);  
  popupNewPlace.open();
});

//  Замена аватара пользователя  //
btnEditAvatar.addEventListener("click", () => {
  formValidators["editAvatarForm"].resetValidation();
  popupAvatar.handleButtonText(false);
  popupAvatar.open();
});

//  Вызываем валидацию  //
activateValidation();