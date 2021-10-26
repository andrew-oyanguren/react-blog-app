import styled from 'styled-components';
import Container from '../components/ui/Container';
import Form from '../components/Form/Form';
import mixins from '../styles/mixins';

const LoginPage = () => {
  return (
    <Container display={mixins.flexCenter}>
      <StyledSection>
        <h1>Blah Blah Blogs</h1>
        <Form />
      </StyledSection>
    </Container>
  );
};

export default LoginPage;

const StyledSection = styled.section`
  border: 1px solid black;
  height: calc(100vh - 4rem);
  margin-top: 3rem;

  h1 {
    font-size: 2.5rem;
    padding: 2rem 0;
    text-align: center;
  }
`;