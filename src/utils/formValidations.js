import { ValidatorsType } from './validatorstypes';
import * as validateFunc from './validators'

export const checkFormValidation = (key, validationVal, inputValue) => {
  switch (key) {
    case ValidatorsType.MINLENGTH:
      return validateFunc.minLength(inputValue, validationVal);
    case ValidatorsType.MAXLENGTH:
      return validateFunc.maxLength(inputValue, validationVal);
    case ValidatorsType.EMAIL:
      return validateFunc.validateEmail(inputValue);
    default:
      return '';
  }
}