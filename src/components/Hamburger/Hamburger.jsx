import { useSelector, useDispatch } from 'react-redux';
import { sideDrawerActions } from '../../store/slices/sideDrawer-slice';
import styled, { css } from 'styled-components';
import mixins from '../../styles/mixins';

const Hamburger = () => {

  const sideDrawerIsOpen = useSelector((state) => state.sideDrawer.isOpen);
  const dispatch = useDispatch();

  const sideDrawerHandler = () => {
    dispatch(sideDrawerActions.toggleDrawer());
  };

  return (
    <StyledHamburger
      display={mixins.flexSpaceEvenly}
      active={sideDrawerIsOpen}
      onClick={sideDrawerHandler}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
  );
};

export default Hamburger;

const StyledHamburger = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  
  ${({ display }) => display};
  flex-direction: column;

  transform: rotate(${({ active }) => active ? '90deg' : '0'});
  transition: ${({theme}) => theme.transitions.hover};

  & div {
    content: '';
    display: block;
    width: inherit;
    height: 0.25rem;
    border-radius: 1rem;
    background-color: black;
    transition: ${({theme}) => theme.transitions.hover};

    &:first-of-type {
      ${({ active }) => active && css`
        transform: rotate(45deg) translate(10px, 10px);
      `}
    }

    &:nth-of-type(2) {
      transition: all 0.1s linear;

      ${({ active }) => active && css`
        transform: scale(0);
        opacity: 0;
      `}
    }

    &:last-of-type {
      ${({ active }) => active && css`
        transform: rotate(-45deg) translate(10px, -10px);
      `}
    }
  }
`;