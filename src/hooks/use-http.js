import { useState, useCallback } from 'react';

const useHttp = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {}
      });

      if (!response.ok) {
        throw new Error('Request Failed');
      }

      const data = await response.json();

      applyData(data);
    } catch (error) {
      setIsLoading(false);
      setError(error.message || 'Something went wrong!');
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest
  };

};

export default useHttp;