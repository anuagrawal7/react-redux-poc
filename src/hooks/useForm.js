import { useCallback, useState } from 'react'
import { checkFormValidation } from '../utils/formValidations';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({});

  const reset = useCallback((data = {}) => {
    setValues(Object.keys(data).length ? data : initialValues);
    setError({});
  }, [])

  const onBlur = useCallback((e, validations) => {
    let message = '';
    if (validations) {
      for (let key in validations) {
        if (validations.hasOwnProperty(key)) {
          message += checkFormValidation(key, validations[key], e.target.value)
        }
      }
      setError(prevState => {
        const obj = { ...prevState };
        if (message) {
          obj[e.target.name] = message;
        } else if (obj[e.target.name]) {
          delete obj[e.target.name];
        }

        return obj;
      });

    }
  }, [])

  const onChange = useCallback((key, value) => {
    setValues({ ...values, [key]: value });
  }, [values]);

  return {
    values,
    onChange,
    reset,
    onBlur,
    error
  }
}