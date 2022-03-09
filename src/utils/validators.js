const minLength = (inputValue, minlength) => {
  return inputValue.length < minlength ? `Minimum length required is ${minlength}. ` : '';
}

const maxLength = (inputValue, maxlength) => {
  return inputValue.length > maxlength ? `Maximum length required is ${maxlength}. ` : '';
}

const validateEmail = (inputValue) => {
  var reg = /^[A-Z0-9._]+@([A-Z0-9]+\.)+[A-Z]{2,4}$/i;
  return reg.test(inputValue) ? '' : 'Please enter valid email.';
}

export {
  minLength,
  maxLength,
  validateEmail
}