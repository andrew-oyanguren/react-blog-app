import styled, { css } from "styled-components";

const FormInput = (props) => {
  const {
    id,
    type,
    value,
    onChange,
    onBlur,
    hasError
  } = props;

  return (
    <StyledInput
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      hasError={hasError}
    />
  );
};

export default FormInput;

const StyledInput = styled.input`
  width: 100%;
  
  &:focus {
    outline: none;
  }

  ${({ hasError }) => hasError && css`
    border: 2px solid red;
  `};
`;