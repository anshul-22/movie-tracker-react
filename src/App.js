import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/watchlist" component={Watchlist} />
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
        </Router>
      </WatchlistProvider>
    </ThemeProvider>
  );
}

export default App;
