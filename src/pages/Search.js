import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

function Search() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    if (query) {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
      setMovies(response.data.Search || []);
    }
  };

  return (
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
  );
}

export default Search;
