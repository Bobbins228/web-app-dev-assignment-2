import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
//import { auth, db } from "../../firebase";
import { AuthContext } from "../../contexts/authContext";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const userContext = useContext(AuthContext);
  //const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleAddToFavorites = (e) => {
    //if (loading) return;
    if (!userContext.isAuthenticated) {
      return navigate("/")
    }
    e.preventDefault();
    //context.addToFavorites(movie);
    context.addToFavorites(userContext.userEmail, movie.id);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;