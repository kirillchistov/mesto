//  пока не импортируем import { validateConfig } from "./constants.js";  //

export default class FormValidator {
  constructor(formElement, validateConfig) {
    this._form = formElement;
    this._inputSelector = validateConfig.inputSelector;
    this._inputErrorClass = validateConfig.inputErrorClass;
    this._errorClass = validateConfig.errorClass;
    this._submitButtonSelector = validateConfig.submitButtonSelector;
    this._inactiveButtonClass = validateConfig.inactiveButtonClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButtonElement = this._form.querySelector(this._submitButtonSelector);
  }

  _getErrorElement(inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-input-error`);
    return this._errorElement;
  }

  _showInputError(inputElement) {
    this._getErrorElement(inputElement);
    inputElement.classList.add(this._inputErrorClass);
    console.log(this._form.validationMessage);
    this._errorElement.textContent = this._form.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    this._getErrorElement(inputElement);
    if (!this._errorElement) return;
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

//  Добавляем приватную подписку на события ввода данных в формы  // 
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.setAttribute('disabled', 'true');
    } else {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.removeAttribute('disabled');
    }
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }
}
