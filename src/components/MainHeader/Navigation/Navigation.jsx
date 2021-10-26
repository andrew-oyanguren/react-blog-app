import styled from "styled-components";
import NavItems from "./NavItems/NavItems";
import ItemsData from './ItemsData/ItemsData';

const Navigation = ({ display, margin }) => {
  return (
    <nav>
      <StyledList display={display} margin={margin}>
        { ItemsData.map((item) => (
          <NavItems
            key={item.name}
            path={item.path}
            name={item.name}
          />
        )) }
      </StyledList>
    </nav>
  );
};

export default Navigation;

const StyledList = styled.ul`
  ${({ display }) => display};
  padding-left: 0;
  
  & > * + * {
    margin-${({margin}) => margin}: 1.75rem;
  }
`;