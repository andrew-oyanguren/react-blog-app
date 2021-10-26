import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/ui/Container';
import Blog from '../components/Blog/Blog';
import mixins from '../styles/mixins';
import BlogSearchBar from '../components/Blog/BlogSearchBar/BlogSearchBar';
import blogData from '../components/Blog/BlogData/BlogData';

const HomePage = () => {

  const [enteredSearch, setEnteredSearch] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);

  useEffect(() => {
    setFilteredSearch(
      blogData.filter((data) => data.title.toLowerCase().includes(enteredSearch.toLowerCase()))
    );
  }, [enteredSearch]);

  return (
    <Container>
      <StyledSection>
        <h1>Your Blogs</h1>
        <BlogSearchBar setSearch={setEnteredSearch} />
        <BlogsContainer display={mixins.flexColumn}>
          {filteredSearch.map((val, idx) => (
            <Blog
              key={idx}
              title={val.title}
              author={val.author}
              body={val.body}
            />
          ))}
        </BlogsContainer>
      </StyledSection>
    </Container>
  );
};

export default HomePage;

const StyledSection = styled.section`
  background-color: tan;
  width: 100%;
  margin-top: 3rem;

  h1 {
    border: 1px solid yellow;
    font-size: 3rem;
    text-align: center;
  }
`;

const BlogsContainer = styled.div`
  background-color: pink;
  margin-top: 2rem;

  & > * + * {
    margin-top: 2rem;
  }

  ${({display}) => display};
`;