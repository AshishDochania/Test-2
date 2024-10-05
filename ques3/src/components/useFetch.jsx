import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Inappropriate Response');
        }
        const result = await response.json();
        setData(result); 
        setError(null);  
      } catch (err) {
        setError(err.message); 
        setData(null);         
      } finally {
        setLoading(false); 
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
