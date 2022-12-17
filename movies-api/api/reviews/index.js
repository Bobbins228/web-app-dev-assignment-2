import express from 'express';
import uniqid from 'uniqid'
import asyncHandler from 'express-async-handler';
import Review from './reviewModel'
const router = express.Router(); 
// Get movie reviews
router.get('/movie/:id/reviews', (req, res) => {
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

//Post a movie review
router.post('/:username/movie/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        Review.create(req.body);
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));
export default router;