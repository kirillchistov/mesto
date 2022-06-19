const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputFieldSet: '.popup__fieldset',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__field-error_type',
  errorClass: 'popup__field-error_active'
};

const showInputError = (validateCfg, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validateCfg.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validateCfg.errorClass);
};

const hideInputError = (validateCfg, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validateCfg.inputErrorClass);
  errorElement.classList.remove(validateCfg.errorClass);
  errorElement.textContent = '';
};

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

const toggleButtonState = (validateCfg, inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add(validateCfg.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
  } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(validateCfg.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
  }
};

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

const enableValidation = (validateCfg) => {
  const formList = Array.from(document.querySelectorAll(validateCfg.formSelector));
  formList.forEach((formElement) => {
      const fieldsetList = Array.from(formElement.querySelectorAll(validateCfg.inputFieldSet));

      fieldsetList.forEach((fieldSet) => {
          setEventListeners(validateCfg, fieldSet);
      });
  });
};

enableValidation(validationConfig);