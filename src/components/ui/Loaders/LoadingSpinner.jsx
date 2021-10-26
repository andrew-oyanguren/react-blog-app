import styled, { keyframes } from "styled-components";
import mixins from '../../styles/mixins';

const LoadingSpinner = () => {
  return (
    <StyledContainer position={mixins.absoluteCenter}>
      <div></div>
    </StyledContainer>
  );
};

export default LoadingSpinner;

const rotateLoader = keyframes`
  0% {
    transform: rotate(0deg); border-width: 9px;
  }
  50% {
    transform: rotate(180deg); border-width: 1px;
  }
  100% {
    transform: rotate(360deg); border-width: 9px;
  }
`;

const StyledContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;

  ${({position}) => position};

  & div {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid transparent;
    border-top-color: red;
    border-radius: 50%;
    animation: ${rotateLoader} 1s linear infinite;
  }
`;