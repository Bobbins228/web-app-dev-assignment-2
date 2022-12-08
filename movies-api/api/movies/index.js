import express from 'express';
import uniqid from 'uniqid'
import asyncHandler from 'express-async-handler';
import { getMovie } from '../tmdb/tmdb-api';

const router = express.Router(); 


// Get movie from tmdb
router.get('/movie/:id', asyncHandler( async(req, res,) => {
    const movie = await getMovie(req.params.id);
    res.status(200).json(movie);
  }));

export default router;