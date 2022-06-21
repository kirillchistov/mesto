const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputFieldSet: '.popup__fieldset',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__field-error_type',
  errorClass: 'popup__field-error_active'
};

// Показываем спан с ошибкой
const showInputError = (validateCfg, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validateCfg.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validateCfg.errorClass);
};

// Прячем спан с ошибкой
const hideInputError = (validateCfg, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validateCfg.inputErrorClass);
  errorElement.classList.remove(validateCfg.errorClass);
  errorElement.textContent = '';
};

// Проверка на инвалидность ввода
const checkInputValidity = (validateCfg, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      showInputError(validateCfg, formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputError(validateCfg, formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  })
};

function disableButton(validateCfg, buttonElement) {
  buttonElement.classList.add(validateCfg.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};

function enableButton(validateCfg, buttonElement) {
  buttonElement.classList.remove(validateCfg.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
};

// Функция изменения состояния кнопки
const toggleButtonState = (validateCfg, inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
      // кнопка будет неактивна
      disableButton(validateCfg, buttonElement);
  } else {
      // если все валидно, кнопка активна
      enableButton(validateCfg, buttonElement);
  }
};

// Слушаем и обрабатываем события в массиве полей ввода и на кнопке
const setEventListeners = (validateCfg, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validateCfg.inputSelector));
  const buttonElement = formElement.querySelector(validateCfg.submitButtonSelector);
  toggleButtonState(validateCfg, inputList, buttonElement);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
          checkInputValidity(validateCfg, formElement, inputElement);
          toggleButtonState(validateCfg, inputList, buttonElement);
      });
  });
};

// Слушаем и обрабатываем события в массиве полей ввода и на кнопке
const enableValidation = (validateCfg) => {
  const formList = Array.from(document.querySelectorAll(validateCfg.formSelector));
  formList.forEach((formElement) => {
      const fieldsetList = Array.from(formElement.querySelectorAll(validateCfg.inputFieldSet));

      fieldsetList.forEach((fieldSet) => {
          setEventListeners(validateCfg, fieldSet);
      });
  });
};

// Включаем функцию с валидацией, передавая ей конфиг с картой классов
enableValidation(validationConfig);