import fetch from 'node-fetch';

export const getMovie = (args) => {
    console.log(args)
    return fetch(
      `https://api.themoviedb.org/3/movie/${args}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
  });
  };
  