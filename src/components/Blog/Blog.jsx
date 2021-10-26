import styled from 'styled-components';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Blog = ({title, author, body}) => {
  return (
    <Card>
      <StyledContainer>
        <article>
          <h2>{title}</h2>
          <hr />
          <p>Author: <strong>{author}</strong></p>
          <BlogBody>
            <p>{body}</p>
          </BlogBody>
          <Button
            borderRad='8px'
            width='100%'
          >
            Delete
          </Button>
        </article>
      </StyledContainer>
    </Card>
  );
};

export default Blog;

const StyledContainer = styled.div`
  width: 280px;
  max-width: 350px;

  & h2 {
    text-align: center;
  }

  article {
    padding: 0.5rem;

    & > * + * {
      margin-top: 1rem;
    }

    & > p {
      font-style: italic;
    }
  }
`;

const BlogBody = styled.div`
  border: 1px solid yellow;
`;