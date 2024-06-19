import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=7e74de3c`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          alt={movie.Title}
          height="500"
          image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/500'}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {movie.Title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {movie.Plot}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Director: {movie.Director}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actors: {movie.Actors}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default MovieDetails;
