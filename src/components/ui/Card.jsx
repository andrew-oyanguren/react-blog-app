import styled from 'styled-components';
import mixins from '../../styles/mixins';

const Card = ({ children }) => {
  return (
    <StyledCard display={mixins.flexCenter}>
      { children }
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background-color: rgb(235, 235, 235);
  width: max-content;
  border-radius: 10px;
  box-shadow:
    0px 0px 6px 2px rgba(0, 0, 0, 0.25),
    0px 0px 8px rgba(0, 0, 0, 0.25)
  ;

  ${({display}) => display};
`;