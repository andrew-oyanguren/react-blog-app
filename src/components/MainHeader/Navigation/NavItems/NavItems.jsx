import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sideDrawerActions } from '../../../../store/slices/sideDrawer-slice';
import styled from 'styled-components';

const NavItems = ({ path, name }) => {

  const dispatch = useDispatch();

  return (
    <StyledListItem>
      <NavLink
        className='navLink'
        activeClassName='active'
        to={path}
        onClick={() => dispatch(sideDrawerActions.closeDrawer())}
      >
        {name}
      </NavLink>
    </StyledListItem>
  );
};

export default NavItems;

const StyledListItem = styled.li`
  position: relatve;

  .navLink {
    font-size: 1.45rem;
    transition: ${({ theme }) => theme.transitions.hover};
    position: relative;
    overflow-x: hidden;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.25rem;
      background-color: transparent;
      transition: ${({ theme }) => theme.transitions.hover};
  
      position: absolute;
      left: -100%;
    }
    
    &:hover {
      color: brown;
    }

    &:active,
    &.active {
      color: brown;

      &::after {
        background-color: brown;
        left: 0;
      }
    }
  }
`;