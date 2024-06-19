import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, Box } from '@mui/material'; // Import Box from MUI for margin
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

function Search() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    if (query) {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=7e74de3c`);
      setMovies(response.data.Search || []);
    }
  };

  return (
    <Box mt={4}> {/* Add margin top here */}
      <Container>
        <SearchBar onSearch={handleSearch} />
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Search;
