import React, { useContext } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import WatchlistContext from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';

function Watchlist() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Your Watchlist
      </Typography>
      <Grid container spacing={4}>
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" component="p">
            Your watchlist is empty.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Watchlist;
