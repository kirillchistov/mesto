// Находим в DOM попап и его элементы, присваиваем константам

let popup = document.querySelector('.popup');
let btnEditProfile = document.querySelector('.profile__button-edit');
let btnClosePopup = document.querySelector('.popup__close');
let profileEditForm = document.querySelector('.popup__form')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let profileNameInput = document.querySelector('.popup__input_user_name');
let profileJobInput = document.querySelector('.popup__input_user_job');

// добавляем модификатор, чтобы попап открывался 
// Подставляем в поля текущие значения со страницы, убирая пробелы 

function popupOpen() {
    popup.classList.add('popup_opened');
    profileNameInput.value = profileName.textContent.trim();
    profileJobInput.value = profileJob.textContent.trim();
}

// чтобы закрыть попап, удаляем модификатор 

function popupClose() {
    popup.classList.remove('popup_opened');
}

// добавляем обработчик, не забыв про отключение дефолта
// по сабмиту возвращаем значения, введенные в форме, приведя их к строкам 

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileJob.textContent = profileJobInput.value;
    popupClose();
}

// добавляем вызов функций через подписку на события click и submit  

btnEditProfile.addEventListener('click', popupOpen);
btnClosePopup.addEventListener('click', popupClose);
profileEditForm.addEventListener('submit', formSubmitHandler);