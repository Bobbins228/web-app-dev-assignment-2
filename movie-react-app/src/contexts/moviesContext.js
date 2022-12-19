import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./authContext";
import { getFavourites, addFavourite, deleteFavourite } from "../api/tmdb-api";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [playlists, setPlaylists] = useState( [] )
  const userContext = useContext(AuthContext)
  const email = userContext.userEmail
  const [favourites, setFavourites] = useState([]);


  if(userContext.isAuthenticated){
      getFavourites(email).then((favourites) => {
      setFavourites(favourites);
    });
  }
  

  const addToFavorites = (username, movie) => {
    let newFavourites = [];
    addFavourite(username, movie);
    newFavourites = getFavourites(username, movie)
    setFavorites(newFavourites)
  };

  // We will use this function in a later section
  const removeFavourite = (username, movie) => {
    let newFavourites = [];
    deleteFavourite(username, movie);
    newFavourites = getFavourites(username, movie)
    setFavorites(newFavourites)
  };

  const clearFavourites = () => {
    setFavorites([])
  }
  

  const addToPlaylist = (movie) => {
    let newPlaylists = [];
    if (!playlists.includes(movie.id)){
      newPlaylists = [...playlists, movie.id];
    }
    else{
      newPlaylists = [...playlists];
    }
    console.log(newPlaylists)
    setPlaylists(newPlaylists)
  };

  

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  const [myReviews, setMyReviews] = useState( {} )
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        favourites,
        addToFavorites,
        addToPlaylist,
        addReview,
        removeFavourite,
        clearFavourites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

  
};

export default MoviesContextProvider;