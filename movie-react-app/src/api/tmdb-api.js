// Login/Register
export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};
// Favourites
export const addFavourite = (username, movie) => {
  return fetch(`/api/users/${username}/favourites`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ movie })
  }).then(res => res.json())
};

export const getFavourites = async (username) => {
  return fetch(`/api/users/${username}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'}).then(res => res.json())
};

//Reviews
export const addReview = (username, movie, review) => {
  return fetch(`/api/reviews/${username}/movie/${movie.id}/reviews`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ author: review.author, movieId: movie.id, content: review.content, rating: review.rating })
  }).then(res => res.json())
};

// Movies
export const getMovies = () => {
  return fetch(
     '/api/movies/tmdb/discover',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getGenres = () => {
  return fetch(
     '/api/genres',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getUpcomingMovies = () => {
  return fetch(
     '/api/movies/tmdb/upcoming',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getNowPlayingMovies = () => {
  return fetch(
     '/api/movies/tmdb/now-playing',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getTrendingMovies = () => {
  return fetch(
     '/api/movies/tmdb/trending',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getTopRatedMovies = () => {
  return fetch(
     '/api/movies/tmdb/top-rated',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getRecommendedMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/movie/${id}/recommended`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getSimilarMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/movie/${id}/similar`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getMovieCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/movie/${id}/credits`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/movie/${id}`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const getMovieImages = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/movie/${id}/images`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

//Actors
export const getPersonImages = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/actors/tmdb/actor/${id}/images`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getPopularPeople = () => {
  return fetch(
     '/api/actors/tmdb/popular',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getTrendingPeople = () => {
  return fetch(
     '/api/actors/tmdb/trending',
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getPerson = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/actors/tmdb/actor/${id}`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getPeopleMovieCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/actors/tmdb/actor/${id}/movie-credits`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};



  
