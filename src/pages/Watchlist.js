import React, { useContext } from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import WatchlistContext from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';

function Watchlist() {
  const { watchlist, removeMovieFromWatchlist } = useContext(WatchlistContext);

  const handleRemoveFromWatchlist = (id) => {
    removeMovieFromWatchlist(id);
  };

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom>
            Your Watchlist ({watchlist.length})
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {watchlist.length > 0 ? (
            watchlist.map((movie) => (
              <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                <MovieCard movie={movie} isInWatchlist>
                  <Button variant="outlined" onClick={() => handleRemoveFromWatchlist(movie.imdbID)}>
                    Remove from Watchlist
                  </Button>
                </MovieCard>
              </Grid>
            ))
          ) : (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
              <Typography variant="body1" component="p">
                Your watchlist is empty.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Watchlist;
