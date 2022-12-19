import React, { useEffect, useContext, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
//import { useAuthState } from "react-firebase-hooks/auth";
//import { auth, db } from "../firebase";
//import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { getFavourites } from "../api/tmdb-api";
const FavoriteMoviesPage = () => {
  const userContext = useContext(AuthContext)
  const email = userContext.userEmail
  const {favourites} = useContext(MoviesContext)
  /*
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    if(userContext.isAuthenticated){
        getFavourites(email).then((favourites) => {
        setFavourites(favourites);
      });
    }
    }, []);
    console.log(favourites)
  const {favourites: movieIds } = useContext(MoviesContext);
  //console.log(getFavourites(email))
  //const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  /*
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };*/
  /*
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  */
  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    favourites.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;