// Находим в DOM попап и его элементы, присваиваем константам

const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#popupProfile');
const btnEditProfile = document.querySelector('.profile__button-edit');
const btnClosePopup = document.querySelector('.popup__close');
const profileEditForm = document.querySelector('.popup__form')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileNameInput = document.querySelector('.popup__input_user_name');
const profileJobInput = document.querySelector('.popup__input_user_job');

// добавляем модификатор, чтобы попап открывался 
// Подставляем в поля текущие значения со страницы, убирая пробелы 

function popupProfileOpen() {
    popupProfile.classList.add('popup_opened');
    profileNameInput.value = profileName.textContent.trim();
    profileJobInput.value = profileJob.textContent.trim();
}

// чтобы закрыть попап, удаляем модификатор 

function popupProfileClose() {
    popupProfile.classList.remove('popup_opened');
}

// добавляем обработчик, не забыв про отключение дефолта
// по сабмиту возвращаем значения, введенные в форме, приведя их к строкам 

function formProfileSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileJob.textContent = profileJobInput.value;
    popupProfileClose();
}

// добавляем вызов функций через подписку на события click и submit  

btnEditProfile.addEventListener('click', popupProfileOpen);
btnClosePopup.addEventListener('click', popupProfileClose);
profileEditForm.addEventListener('submit', formProfileSubmitHandler);