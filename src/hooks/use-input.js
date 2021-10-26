import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = isTouched && !valueIsValid;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const inputReset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue,
    hasError,
    isTouched,
    setIsTouched,
    inputChangeHandler,
    inputBlurHandler,
    inputReset
  };
};

export default useInput;