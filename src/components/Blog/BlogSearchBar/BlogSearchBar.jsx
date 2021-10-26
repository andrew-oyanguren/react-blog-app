import { useCallback } from 'react';
import styled from 'styled-components';

const BlogSearchBar = ({ setSearch }) => {

  const inputChangeHandler = useCallback((event) => {
    setSearch(event.target.value);
  }, [setSearch]);

  return (
    <StyledWrapper>
      <input
        type='text'
        placeholder='Search for a blog...'
        onChange={inputChangeHandler}
      />
    </StyledWrapper>
  );
};

export default BlogSearchBar;

const StyledWrapper = styled.div`
  background-color: plum;
  padding: 0.5rem;
  width: max-content;
  margin: 0 auto;
  
  input {
    width: 200px;
  }

`;