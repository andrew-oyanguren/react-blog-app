import { useState } from 'react';

const useSearch = () => {
  const [enteredSearch, setEnteredSearch] = useState('');

  const onChange = (event) => {
    setEnteredSearch(event.target.value);
  };

  const filterData = (data) => {
    if (data.filter((val) => val.toLowerCase().incudes(enteredSearch.toLowerCase()))) {
      return val;
    }
  };

};

export default useSearch;