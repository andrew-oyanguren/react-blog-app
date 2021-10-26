import styled from "styled-components";
import mixins from '../../styles/mixins';
import useWindowDims from '../../hooks/use-windowDims';
import useWindowScroll from '../../hooks/use-windowScroll';

import Container from '../ui/Container';
import Navigation from './Navigation/Navigation';
import Hamburger from '../Hamburger/Hamburger';

const MainHeader = () => {

  const { windowDims } = useWindowDims();
  const { headerIsVisible } = useWindowScroll(80);

  const responsiveNavbar = windowDims[0] > 768 ? <Navigation display={mixins.flex} margin='left' /> : <Hamburger />;

  return (
    <StyledHeader bg={headerIsVisible}>
      <Container display={mixins.flexSpaceBetween}>
        <h1>BBB</h1>
        {responsiveNavbar}
      </Container>
    </StyledHeader>
  );
};

export default MainHeader;

const StyledHeader = styled.header`
  background-color: ${({bg}) => bg ? 'gray' : 'transparent'};
  height: 4rem;
  transition: all 0.3s ease-out;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
`;

