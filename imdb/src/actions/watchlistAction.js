export const ADD_TO_MOVIE_WATCHLIST = "ADD_TO_MOVIE_WATCHLIST";
export const ADD_TO_TV_SHOW_WATCHLIST = "ADD_TO_TV_SHOW_WATCHLIST";
export const REMOVE_FROM_MOVIE_WATCHLIST = "REMOVE_FROM_MOVIE_WATCHLIST";
export const REMOVE_FROM_TV_SHOW_WATCHLIST = "REMOVE_FROM_TV_SHOW_WATCHLIST";

export const addToMovieWatchlist = watchlistObj => {
  return {
    type: ADD_TO_MOVIE_WATCHLIST,
    payload: {
      watchlistObj: watchlistObj
    }
  };
};

export const addToTvShowWatchlist = watchlistObj => {
  return {
    type: ADD_TO_TV_SHOW_WATCHLIST,
    payload: {
      watchlistObj: watchlistObj
    }
  };
};

export const removeFromMovieWatchlist = watchlistObj => {
  return {
    type: REMOVE_FROM_MOVIE_WATCHLIST,
    payload: {
      watchlistObj: watchlistObj
    }
  };
};

export const removeFromTvShowWatchlist = watchlistObj => {
  return {
    type: REMOVE_FROM_TV_SHOW_WATCHLIST,
    payload: {
      watchlistObj: watchlistObj
    }
  };
};
