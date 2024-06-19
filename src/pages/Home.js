import React from 'react';
import { Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Movie Tracker
      </Typography>
      <Typography variant="h6" component="p">
        Track your favorite movies and manage your watchlist.
      </Typography>
    </Container>
  );
}

export default Home;
