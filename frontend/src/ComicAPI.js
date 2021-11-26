import { useState, useEffect } from 'react';

const useComic = (url) => {
  const [comic, setComic] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Comic API response was not ok!');
        }
        const comics = await response.json();
        setComic(comics);
      } catch (err) {
        setError(err);
      }
    };
    fetchComic();
  }, [url]);

  return { comic, error };
};

export default useComic;