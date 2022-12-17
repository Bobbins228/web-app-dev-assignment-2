import dotenv from 'dotenv';
import express from 'express';
import './db';
import './seedData'
import usersRouter from './api/users';
import passport from './authenticate';
import moviesRouter from './api/movies';
import genreRouter from './api/genres'
dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;
app.use(express.json());

app.use(passport.initialize());

app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter)
app.use('/api/genres', genreRouter)

app.use(errHandler);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

