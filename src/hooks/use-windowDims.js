import { useState, useEffect } from 'react';

const useWindowDims = () => {
  const [windowDims, setWindowDims] = useState([window.innerWidth, window.innerHeight]);

  const windowResizeHandler = () => {
    setWindowDims([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);

    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  return { windowDims };
};

export default useWindowDims;