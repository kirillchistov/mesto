//  Попап c подтверждением действия, напр., для удаления карточки  //

import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
/*  constructor(popupSelector) { */
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = submitHandler;
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
      this.close();
    });
  }
}