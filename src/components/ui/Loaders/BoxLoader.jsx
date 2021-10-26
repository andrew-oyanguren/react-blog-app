import styled, { keyframes } from "styled-components";
import mixins from '../../../styles/mixins';

const BoxLoader = () => {
  return (
    <StyledContainer position={mixins.absoluteCenter}>
      <StyledLoader>
        <div></div>
        <div></div>
      </StyledLoader>
    </StyledContainer>
  );
};

export default BoxLoader;

const flipBox = keyframes`
  0%{ transform: rotateX(0) rotateY(0) }
  25%{ transform: rotateX(0) rotateY(180deg) }
  50%{ transform: rotateX(180deg) rotateY(180deg) }
  75%{ transform: rotateX(180deg) rotateY(0) }
  100%{ transform: rotateX(0) rotateY(0) }
`;

const StyledContainer = styled.div`
  ${({position}) => position};
`;

const StyledLoader = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  & div {
    background-color: rgb(180, 180, 180);
    width: 50%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    perspective: 200px;
    transform-origin: bottom right;
    animation: ${flipBox} 1.5s ease infinite;

    &:last-of-type {
      animation-delay: 1s;
      background-color: rgb(220, 220, 220);
    }
  }
`;