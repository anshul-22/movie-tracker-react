import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WatchlistProvider } from './context/WatchlistContext';
import Home from './pages/Home';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WatchlistProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
      </WatchlistProvider>
    </ThemeProvider>
  );
}

export default App;
