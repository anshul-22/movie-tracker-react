import React, { createContext, useState } from 'react';

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addMovieToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeMovieFromWatchlist = (id) => {
    setWatchlist(watchlist.filter(movie => movie.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addMovieToWatchlist, removeMovieFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;
