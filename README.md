# Assignment 2 - Web API.

Name: Mark Campbell

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

 + Authentication
 + Discover, upcoming, now playing, top rated, trending movies endpoints
 + Popular, trending actors endpoints
 + Movie credits, similar, recommended endpoints
 + Actors credidited movies endpoints
 + Add, list, delete user's favourites
 + Create and update user reviews


## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

______________________
NODEENV=development<br>
PORT=8085<br>
HOST=localhost<br>
mongoDB=YourMongoURL<br>
secret=YourJWTSecretS<br>
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 
### Movies
- /api/movies/tmdb/movie/:id | GET | Gets a single movie from tmdb
- /api/movies/tmdb/discover | GET | Get discover movies from tmdb
- /api/movies/tmdb/upcoming | GET | Get upcoming movies from tmdb
- /api/movies/tmdb/now-playing | GET | Get now playing movies from tmdb
- /api/movies/tmdb/top-rated | GET | Get top rated movies from tmdb
- /api/movies/tmdb/movie/:id/recommended | GET | Get recommended movies from tmdb
- /api/movies/tmdb/movie/:id/similar | GET | Get similar movies from tmdb
- /api/movies/tmdb/movie/:id/credits | GET | Get movies credits from tmdb
- /api/movies/tmdb/trending | GET | Get trending movies credits from tmdb
- /api/movies/tmdb/movie/:id/images | GET | Get movie images from tmdb

### Actors
- /api/actors/tmdb/popular | GET | Gets popular actors from tmdb
- /api/actors/tmdb/trending | GET | Gets trending actors from tmdb
- /api/actors/tmdb/actor/:id | GET | Gets a single actor from tmdb
- /api/actors/tmdb/actor/:id/movie-credits | GET | Gets movie credits for an actor from tmdb
- /api/actors/tmdb/actor/:id/images | GET | Gets actors images from tmdb

### Users
- /api/users | GET | Gets a single movie from tmdb
- /api/users/ | GET | Gets users 
- /api/users/ | POST | Registers/authenticates a user
- /api/users/:userName/favourites | POST | Add a favourite movieId to user's favourites array
- /api/users/:username/movie/:id/favourites | POST | Deletes a movieId from a user's favourites array
- /api/users/:userName/favourites | GET | Gets users favourites 

### Genres
- /api/genres/ | GET | Gets genres from tmdb

### Reviews
- /api/reviews/movie/:id/reviews | GET | Gets movie reviews
- /api/reviews/:username/movie/:id/reviews | POST | creates/updates a movie review


## Security and Authentication

The application uses JWT Authentication to handle user sessions for important user functions like favourites and reviews
### Protected routes
- Favourite movies Page 

## Integrating with React App

Favourite movie ids are gathered from the user object which is stored on Mongo Atlas. When a user likes a movie the id will be added to the user collection.<br>
Reviews are stored on Mongo atlas and when a review is posted it will be stored on the database. Reviews are gathered from the database too.<br>
All movie and actor endpoints are gathered from the api. The api uses tmdb to get movie data.

## Independent learning (if relevant)

Using a Raspberry Pi running Ubuntu server I was able to run a production build of the react app using `serve -s build`. <br>
The api is being run alongside it on the Pi. Using [cloudflare tunnels](https://www.cloudflare.com/products/tunnel/) and a personal domain anyone can access the website from anywhere in the world. <br>
Although it took some time I found this to be a great free alternative hosting option but the only issue with this is that because I have an older raspberry pi the performance is a bit slow so images take a while to load.<br>
You can find the web app at this address https://movie-app.markscampbell.com/
