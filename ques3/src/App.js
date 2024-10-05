
import React from 'react';
import useFetch from './components/useFetch';

function App(){
  const url = 'https://v2.jokeapi.dev/joke/Any';
  const { data, loading, error } = useFetch(url);

  console.log(data);

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>{data.category}</h2>
          {data.type === 'single' ? (
            <p>{data.joke}</p>
          ) : (
            <div>
              <p>{data.setup}</p>
              <p>{data.delivery}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
