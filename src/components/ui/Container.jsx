import styled from "styled-components";

const Container = ({ children, display }) => {
  return (
    <StyledContainer display={display}>
      { children }
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  //background-color: lime;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  ${({ display }) => display};
  
  @media ${({theme}) => theme.breakpoints.min1200} {
    padding: 0;
    background-color: orange;
  }
`;