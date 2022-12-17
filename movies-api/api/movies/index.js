import express from 'express';
import uniqid from 'uniqid'
import asyncHandler from 'express-async-handler';
import { getMovie, getMovies, getUpcomingMovies } from '../tmdb/tmdb-api';

const router = express.Router(); 


// Get movie from tmdb
router.get('/tmdb/movie/:id', asyncHandler( async(req, res,) => {
    const movie = await getMovie(req.params.id);
    res.status(200).json(movie);
  }));

// Get discover movies
router.get('/tmdb/discover', asyncHandler( async(req, res) => {
  const movies = await getMovies();
  res.status(200).json(movies);
}));
/*
//Post a movie review
router.post('/:id/reviews', (req, res) => {
  const id = parseInt(req.params.id);

  if (movieReviews.id == id) {
      req.body.created_at = new Date();
      req.body.updated_at = new Date();
      req.body.id = uniqid();
      movieReviews.results.push(req.body); //push the new review onto the list
      res.status(201).json(req.body);
  } else {
      res.status(404).json({
          message: 'The resource you requested could not be found.',
          status_code: 404
      });
  }
});

// Get movie reviews
router.get('/:id/reviews', (req, res) => {
  const id = parseInt(req.params.id);
  // find reviews in list
  if (movieReviews.id == id) {
      res.status(200).json(movieReviews);
  } else {
      res.status(404).json({
          message: 'The resource you requested could not be found.',
          status_code: 404
      });
  }
});
*/
export default router;