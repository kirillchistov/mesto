//  Класс создает карточку с текстом и ссылкой на изображение  //

//  Импортируем нужные свойства и методы из index.js  //
// import {openPopup, popupElement, popupImage, popupImageCaption} from './index.js' //

//  Открываем экспорт класса со всеми полями для импорта  //
//  конструктор принимает данные cardData и селектор шаблона #element-template  //
//  cardData содержит ссылку и название места  //
export default class Card {
    constructor(cardData, cardSelector, handleCardClick, handleDeleteCard, handleLike, handleRemoveLike) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._cardId = cardData.userId;
    this._userId = cardData.userId;
    this._ownerId = cardData.ownerId;
//    this._isLiked = false;  //
    this._likes = cardData.likes;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardUnlike = handleCardUnlike;
  }

  //  методы для работы с разметкой, установки слушателей событий  //
  
  //  приватный (_getTemplate) клонирует из шаблона и возвращает готовую карточку (cardElement)  //
  _getTemplate() {
    return cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  }

  //  публичный (createCardElement) добавляет данные, слушателей, возвращает готовую карточку  //
  //  добавляем обработку счетчика лайков, статус доступности удаления (своей) карточки  //
  createCardElement() {
    this._element = this._getTemplate();
    this._imgElement = this._element.querySelector('.element__image');
    this._titleElement = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector(".element__button-like");
    this._deleteButton = this._element.querySelector(".element__button-delete");
    this._likesCount = this._element.querySelector(".element__likes-count");
    this._imgElement.src = this._link;
    this._imgElement.alt = this._name;
    this._imgElement.title = this._name;
    this._titleElement.textContent = this._name;
    this._likesCount.textContent = `${this._likes.length}`;
    this._setEventListeners();
    this._handleLikeState();
    this.handleDeleteButtonState();
    return this._element;
  }

  // приватный (_setEventListeners) слушает клики по иконкам "сердечко" и "корзина"  //
  _setEventListeners() {
    this._likeButton = this._element.querySelector('.element__button-like');
    this._deleteButton = this._element.querySelector('.element__button-delete');

    this._imgElement.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.contains("element__button-like_active")
        ? this._handleCardUnlike()
        : this._handleCardLike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });
  }

  //  приватный - добавляет лайк при клике, если  (вкл./выкл.) при клике на сердечко  //  
  _handleLikeState() {
    this._likes.forEach((user) => {
      if (user._id === this._userId) {
        this.addLike();
      } else {
        this.removeLike();
      }
    });
  }

  // публичный удаляет иконку удаления, если карточка создана другим пользователем (!==this._ownerId)  //
  handleDeleteButtonState() {
    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
      this._deleteButton = null;
    }
  }
  
  //  приватный (_likeCard) меняет состояние лайка (вкл./выкл.) при клике на сердечко  //
 /* _likeCard() {
    this._likeButton.classList.toggle('element__button-like_active');
    this._isLiked = !this._isLiked;
  }
  */

//  усложняем обработку - учитываем лайки разных пользователей, отображаем счетчик лайков  // 

  //  Выводим счетчик кликов  //
  setLikesCount(res) {
    this._likesCount.textContent = `${res.likes.length}`;
  }

  //  Закрашиваем сердечко после лайка  //
  addLike() {
    this._likeButton.classList.add("element__button-like_active");
  }

  //  Делаем сердечко белым после повторного клика = dislike  //
  removeLike() {
    this._likeButton.classList.remove("element__button-like_active");
  }
  
  // приватный (_deleteCard) удаляет карточку из DOM при клике на корзинку  //
  _deleteCard() {  
    this._element.remove();
    this._element = null;
  }
}