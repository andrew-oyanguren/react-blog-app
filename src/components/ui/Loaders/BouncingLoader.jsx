import styled, { keyframes } from "styled-components";
import mixins from '../../../styles/mixins';

const BouncingLoader = () => {
  return (
    <StyledLoader display={mixins.flex} position={mixins.absoluteCenter}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
};

export default BouncingLoader;

const bounce = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-40px);
  }
`;

const StyledLoader = styled.div`
  ${({ display }) => display};
  ${({position}) => position};

  & div {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: tan;
    animation: ${bounce} 0.5s cubic-bezier(.19, .57, .3, .98) infinite alternate;

    &:nth-of-type(2) {
      animation-delay: 0.1s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.2s;
    }

    &:last-of-type {
      animation-delay: 0.3s;
    }
  }

  & > * + * {
    margin-left: 0.25rem;
  }
`;