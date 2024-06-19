
import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import WatchlistContext from '../context/WatchlistContext';

function MovieCard({ movie }) {
  const { addMovieToWatchlist } = useContext(WatchlistContext);

  return (
    <Card>
      <CardMedia
        component="img"
        alt={movie.Title}
        height="300"
        image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/movie/${movie.imdbID}`}>
          Learn More
        </Button>
        <Button size="small" onClick={() => addMovieToWatchlist(movie)}>
          Add to Watchlist
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
