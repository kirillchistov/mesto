// Кнопки в профиле //
const btnEdit = document.querySelector('.profile__button-edit');
const btnAdd = document.querySelector('.profile__button-add');

//   Попап редактирования профиля //
const popupEdit = document.querySelector('#popupProfile');
const formProfile = document.querySelector('#formProfileEdit');
const nameInput = document.querySelector('.popup__input_user_name');
const jobInput = document.querySelector('.popup__input_user_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//  Попап добавления нового места //
const popupAdd = document.querySelector('#popupAddPlace');
const gallery = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elementTemplate').content;
const formCreateCard = document.querySelector('#formAddPlace');
const placeNameInput = document.querySelector('.popup__input_place_name');
const placeLinkInput = document.querySelector('.popup__input_place_link');
const btnCreate = document.querySelector('#btnPopupAddPlaceSubmit');

//  Попап открытия карточки места //
const popupElement = document.querySelector('#popupElement');
const popupImage = popupElement.querySelector('.popup__image');
const popupImageCaption = popupElement.querySelector('.popup__image-caption');
const imgElements = document.querySelectorAll('.element__image');

// Все попапы в документе //
const popupList = Array.from(document.querySelectorAll('.popup'));

//  Кнопка закрытия попапа //
const btnsClose = document.querySelectorAll('.popup__close');



//  Открытие попаов //
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => closeByEsc(evt, popup));
};

const editProfile = (popup) => {
  openPopup(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

//  Закрытие попапов - удаление класса и отписка //
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => closeByEsc(evt, popup));
};


/* Закрытие через Esc */
const closeByEsc = (evt, popup) => {
  if (evt.key === 'Escape') {
      closePopup(popup)
  }
}

// Закрытие нажатием на overlay
const closeByOverlay = (popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
          closePopup(popup);
      }
  });
};

popupList.forEach((currentPopup) => {
  closeByOverlay(currentPopup);
});

//  Форма добавления места: массив с названиями и ссылками из полей формы //
const createCardForm = (evt) => {
  evt.preventDefault();
  const card = {};
  card.link = placeLinkInput.value;
  card.name = placeNameInput.value;
  gallery.prepend(createCard(card));
  closePopup(popupAdd);
  formCreateCard.reset();
};

//  Обработка события сохранения изменений в профиле с отменой перезагрузки //
const submitProfileFormHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

//  Закрытие попапов - обработка клика по кнопке "x" ближайшего попапа //
const handleClickClosePopup = (evt) => {
  closePopup(evt.target.closest('.popup'));
};

const openImagePopup = (image) => {
  image.querySelector('.element__image').addEventListener('click', evt => {
    popupImage.src = ''; // сброить кэш
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImage.title = evt.target.alt;
    popupImageCaption.textContent = evt.target.alt;
    openPopup(popupElement);
  });
};

//  Удаление карточки места //
const deleteItem = (item) => {
  item.querySelector('.element__button-delete').addEventListener('click', evt => {
    evt.target.closest('.element').remove();
  });
};

//  Изменение кнопки Like  при клике //
const toggleLike = (item) => {
  item.querySelector('.element__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__button-like_active');
  })
};

//  Создание карточки: клон элемента из шаблона, добавление названия и ссылки //
const createCard = (card) => {
  const galleryItem = elementTemplate.querySelector('.element').cloneNode(true);
  const elementItem = galleryItem.querySelector('.element__image');
  galleryItem.querySelector('.element__title').textContent = card.name;
  elementItem.src = card.link;
  elementItem.alt = card.name;
  toggleLike(galleryItem);
  deleteItem(galleryItem);
  openImagePopup(galleryItem);
  return galleryItem;
};


initialCards.forEach((card) => {
  const cardItem = createCard(card);
  gallery.prepend(cardItem);
});

//  Подписка на события отправки форм профиля и Нового места //
formProfile.addEventListener('submit', submitProfileFormHandler);
formCreateCard.addEventListener('submit', createCardForm);

//  Подписка на события кликов по кнопкам в профиле: //
btnEdit.addEventListener('click', () => editProfile(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));

//  Подписка на событие клика по кнопке "x" //
btnsClose.forEach(button => {
  button.addEventListener('click', handleClickClosePopup);
});