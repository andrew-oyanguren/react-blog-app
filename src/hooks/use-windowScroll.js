import { useState, useEffect, useCallback } from 'react';

const useWindowScroll = (axisInt) => {
  const [headerIsVisible, setHeaderIsVisible] = useState(false);

  const windowScrollHandler = useCallback(() => {
    if (window.scrollY >= axisInt) {
      setHeaderIsVisible(true);
    } else {
      setHeaderIsVisible(false);
    }
  }, [axisInt]);

  useEffect(() => {
    window.addEventListener('scroll', windowScrollHandler);

    return () => window.removeEventListener('scroll', windowScrollHandler);
  }, [windowScrollHandler]);

  return { headerIsVisible };
};

export default useWindowScroll;