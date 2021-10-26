import styled from "styled-components";
import Button from '../../ui/Button';

const FormActions = () => {
  return (
    <StyledActions>
      <Button width='100%'>Login</Button>
    </StyledActions>
  );
};

export default FormActions;

const StyledActions = styled.div`
  border: 1px solid transparent;
`;