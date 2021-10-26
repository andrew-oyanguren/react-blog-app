import styled from 'styled-components';

const Button = ({ children, width, borderRad, onHandler }) => {
  return (
    <StyledButton
      width={width}
      br={borderRad}
      onClick={onHandler}
    >
      { children }
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: ${({width}) => width || 'initial'};
  padding: 0.5em 1em;
  border: none;
  border-radius: ${({br}) => br ? br : 'initial'};
  cursor: pointer;
  background-color: rgb(210, 210, 210);

  &:hover {
    background-color: rgb(80, 80, 80);
    color: white;
  }

  &:active {
    outline: none;
    transform: scale(0.98);
  }
`;