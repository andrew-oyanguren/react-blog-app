import styled from 'styled-components';
import FormInput from '../FormInput/FormInput';

const FormControl = (props) => {
  
  const {
    inputId,
    inputType,
    inputValue,
    inputChangeHandler,
    inputBlurHandler,
    inputHasError
  } = props;

  const convertedLabel = inputId[0].toUpperCase() + inputId.slice(1);
  const errorMessage = inputHasError && (
    <StyledErrorMessage>
      {`Please enter a valid ${inputId}`}
    </StyledErrorMessage>
  );

  return (
    <StyledControl>
      <label htmlFor={inputId}>{convertedLabel}</label>
      <FormInput
        id={inputId}
        type={inputType}
        value={inputValue}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        hasError={inputHasError}
      />
      {errorMessage}
    </StyledControl>
  );
};

export default FormControl;

const StyledControl = styled.div`
  border: 1px solid transparent;
`;

const StyledErrorMessage = styled.p`
  color: red;
`;