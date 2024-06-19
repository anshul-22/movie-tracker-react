import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://wallpapercave.com/wp/wp3160287.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        p: 4,
      }}
    >
      <Container sx={{ p: 0, m: 0, width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Movie Tracker
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Track your favorite movies and manage your watchlist.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/search" sx={{ mt: 4 }}>
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default Home;
