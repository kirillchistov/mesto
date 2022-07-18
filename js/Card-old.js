//  Класс создает карточку с текстом и ссылкой на изображение  //

//  Импортируем нужные свойства и методы из index.js  //
import {openPopup, popupCard, popupCardImage, popupCardCaption} from './index.js';

//  Открываем экспорт класса со всеми полями для импорта  //

export default class Card {
    // конструктор принимает данные cardData и селектор шаблона #element-template  //
    // cardData содержит ссылку и название места  //
    constructor(cardData, cardSelector, openImagePopup) {
    this._cardTitle = cardData.name;
    this._cardImageLink = cardData.link;
    this._cardSelector = cardSelector;
    this._openImagePopup = openImagePopup;
  }
  //  методы для работы с разметкой, установки слушателей событий  // 
  //  приватный (_getTemplate) клонирует из шаблона и возвращает готовую карточку (cardElement)  //
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  //   публичный (generateCard) добавляет данные, создает слушателей, возвращает готовую карточку (_element)  //
  generateCard() {
    this._element = this._getTemplate();
    this._imgElement = this._element.querySelector('.element__image');
    this._titleElement = this._element.querySelector('.element__title');
    this._imgElement.src = this._cardImageLink;
    this._imgElement.alt = this._cardTitle;
    this._imgElement.title = this._cardTitle;
    this._titleElement.textContent = this._cardTitle;
    this._setEventListeners();
    return this._element;
  }

  // приватный (_setEventListeners) слушает клики по иконкам "сердечко" и "корзина"  //
  _setEventListeners() {
    this._likeButton = this._element.querySelector('.element__button-like');
    this._deleteButton = this._element.querySelector('.element__button-delete');

    this._imgElement.addEventListener('click', () => {
      this._openImagePopup(this._cardImageLink, this._cardTitle);
    });

    this._likeButton.addEventListener('click', () => {
      this._likeCard();
    });

    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });
  }

  // приватный (_likeCard) меняет состояние лайка (вкл./выкл.) при клике на сердечко  //
  _likeCard() {
    this._likeButton.classList.toggle('element__button-like_active');
  }

  // приватный (_deleteCard) удаляет карточку из DOM при клике на корзинку  //
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}