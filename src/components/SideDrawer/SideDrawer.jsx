import { useSelector } from 'react-redux';
import styled from 'styled-components';
import mixins from '../../styles/mixins';

import Navigation from '../MainHeader/Navigation/Navigation';

const SideDrawer = () => {

  const sideDrawerIsOpen = useSelector((state) => state.sideDrawer.isOpen);

  return (
    <StyledSideDrawer
      display={mixins.flexCenter}
      active={sideDrawerIsOpen}
    >
      <Navigation display={mixins.flexColumn} margin='top' />
    </StyledSideDrawer>
  );
 };

export default SideDrawer;

const StyledSideDrawer = styled.div`
 background-color: grey;
 width: 40%;
 height: 100%;
 max-width: 768px;
 position: fixed;
 top: 0;
 bottom: 0;
 left: 0;
 z-index: 999;
 transition: transform 0.5s ease-out;
 transform: translateX(${({active}) => active  ? '0' :  '-101%'});

 ${({display}) => display};
`;