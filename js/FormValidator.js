//  пока не импортируем import { validateConfig } from "./constants.js";  //
//  класс FormValidator настраивает валидацию полей формы  //
//  принимает в конструктор объект настроек с селекторами и классами формы  //
//  принимает вторым параметром элемент той формы, которая валидируется  //
//  имеет приватные методы для обработки форму: проверка валидности, вкл./выкл. кнопки, установка обработчиков  //
//  имеет публичный метод enableValidation, который включает валидацию формы  //
//  для каждой проверяемой формы создаем экземпляр класса FormValidator в index.js  //
export default class FormValidator {
  constructor(validateCfg, formElement) {
    this._validateForm = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(validateCfg.inputSelector));
    this._submitButton = formElement.querySelector(validateCfg.submitButtonSelector);
    this._inactiveButtonClass = validateCfg.inactiveButtonClass;
    this._inputErrorClass = validateCfg.inputErrorClass;
}

  //  публичный для включения валидации форм  //
  enableValidation() {
    this._checkFormValidity();
  };

  //  приватный для валидации формы  //
  //  для каждого инпута в форме создаем объект и вешаем слушатели ввода  //
  _checkFormValidity() {
    this._inputList.forEach((inputElement) => {
      const inputObj = {
        input: inputElement,
        errorSpan: this._validateForm.querySelector(`.${inputElement.id}-error`)
      };
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputObj);
        this._toggleSubmitButtonState();
      });
    });
  };

  //  приватный для проверки валидности каждого инпута и показа ошибок  //
  _checkInputValidity(inputObj) {
    if (!this._isInputValid(inputObj)) {
      this._showInputError(inputObj);
    }
    else {
      this._hideInputError(inputObj);
    };
  };

  //  приватный для переключения состояние кнопки сохренения (вкл./выкл.)  //
  _toggleSubmitButtonState() {
    if (this._hasInvalidInput())
      this.deactivateSubmitButton();
    else
      this.activateSubmitButton();
  };

  //  публичный для включения (любой) кнопки  //
  activateSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  };

  //  публичный для выключения (любой) кнопки  //
  deactivateSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  };
  
  //  приватный для проверки на наличие некорректного инпута в форме  //
  _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  };

  //  приватный для проверки валидности конкретного инпута  //
  _isInputValid(inputObj) {
    return (inputObj.input.validity.valid);
  };

  //  приватный для показа спана с ошибкой при невалидном инпуте  //
  _showInputError(inputObj) {
    inputObj.input.classList.add(this._inputErrorClass);
    inputObj.errorSpan.textContent = inputObj.input.validationMessage;
  };

  //  приватный для скрытия спана с ошибкой при невалидном инпуте  //
  _hideInputError(inputObj) {
    inputObj.input.classList.remove(this._inputErrorClass);
    inputObj.errorSpan.textContent = '';
  };

  //  публичный для скрытия ошибок (вызов в index.js)  //
  hideErrors() {
    this._inputList.forEach((inputElement) => {
      const inputObj = {
        input: inputElement,
        errorSpan: this._validateForm.querySelector(`.${inputElement.id}-error`)
      };
      this._hideInputError(inputObj);
    });
  };


  
  /* Находим инпут с ошибкой в _checkFormValidity  //
  _getErrorElement(inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-input-error`);
    return this._errorElement;
  }
  */

//  Не добавляем здесь слушателей  // 
/*  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  */

  /*  проверку поменяли 
  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }
  */

  /*
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.setAttribute('disabled', 'true');
    } else {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.removeAttribute('disabled');
    }
  }
  */

  /*
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
  */

  /* Включаем в начале
  enableValidation() {
    this._validateForm.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }
  */
}