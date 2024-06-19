import React, { createContext, useState } from 'react';

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addMovieToWatchlist = (movie) => {
    setWatchlist([...watchlist, { ...movie, watched: false }]);
  };

  const removeMovieFromWatchlist = (id) => {
    setWatchlist(watchlist.filter(movie => movie.imdbID !== id));
  };

  const toggleWatchedStatus = (id) => {
    setWatchlist(
      watchlist.map(movie =>
        movie.imdbID === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addMovieToWatchlist, removeMovieFromWatchlist, toggleWatchedStatus }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;
