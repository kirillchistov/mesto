//  Попап c подтверждением действия, напр., для удаления карточки  //

import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
/*  constructor(popupSelector) { */
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = submitHandler;
    this._submitButton = this._popup.querySelector(".popup__submit");
    this._submitButtonText = this._submitButton.textContent;   
  }

  //  указываем 2 параметра (2й с текстом по умолчанию, чтобы не указывать лишний раз его)
  renderLoading(isLoading, loadingText='Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  open(card) {
    this._card = card;
    super.open();
  }

/*  setConfirmHandler(handler) {
    this._setConfirmHandler = handler;
  }
*/
  

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._card);
    });
  }
}