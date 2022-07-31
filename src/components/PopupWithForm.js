//  Класс PopupWithForm extends Popup.  //
//  Принимает в конструктор колбэк сабмита формы,  //
  //  содержит приватный метод _getInputValues  //
  //  перезаписывает родительские методы setEventListeners и close.  //
//  Для каждого попапа создать свой экземпляр класса PopupWithForm.  //

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
  }

  //  приватный метод для получения и возвращения данных формы  //
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  //  перезаписываем родительские методы setEventListeners и close  //
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}