import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MainHeader from '../MainHeader/MainHeader';
import SideDrawer from '../SideDrawer/SideDrawer';
import UserTab from '../UserTab/UserTab';
import useWindowDims from '../../hooks/use-windowDims';

const Layout = ({ children }) => {

  const { windowDims } = useWindowDims();
  const responsiveSideDrawer = windowDims[0] <= 768 && <SideDrawer />;

  const isAuthenticated = useSelector((state) => state.isAuth.isAuthenticated);

  return (
    <StyledLayout>
      {isAuthenticated && <UserTab />}
      <MainHeader />
      { responsiveSideDrawer }
      <main>
        { children }
      </main>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  backgrund-color: tan;
`;