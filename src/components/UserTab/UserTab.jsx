import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import mixins from '../../styles/mixins';
import { AuthActions } from '../../store/slices/auth-slice';

const UserTab = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const navigateToLoginPage = () => history.replace('login');

  const logoutHandler = () => {
    dispatch(AuthActions.logout());
    localStorage.removeItem('isAuth');
    navigateToLoginPage();
  };

  return (
    <StyledTab display={mixins.flexColumn}>
      <img src="https://picsum.photos/40" alt="User" />
      <Button
        borderRad='10px'
        onHandler={logoutHandler}
      >
        Logout
      </Button>
    </StyledTab>
  );
};

export default UserTab;

const StyledTab = styled.div`
  background-color: rgb(230, 230, 230);
  padding: 0.5rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.35);
  
  position: fixed;
  top: 60%;
  right: 0;
  transform: translateY(-50%);
  z-index: 1001;

  ${({ display }) => display};
  
  & > * + * {
    margin-top: 1rem;
  }

  & img {
    border-radius: 50%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }
`;