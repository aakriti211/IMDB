const initialState = {
  watchlistMovieArray: [],
  watchlistTvShowsArray: []
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_MOVIE_WATCHLIST": {
      const watchlistObj = action.payload.watchlistObj;
      var newArr;
      newArr = [...state.watchlistMovieArray];
      newArr.push(watchlistObj);
      return {
        ...state,
        watchlistMovieArray: newArr
      };
    }
    case "ADD_TO_TV_SHOW_WATCHLIST": {
      const watchlistObj = action.payload.watchlistObj;
      var newArr;
      newArr = [...state.watchlistTvShowsArray];
      newArr.push(watchlistObj);
      return {
        ...state,
        watchlistTvShowsArray: newArr
      };
    }
    case "REMOVE_FROM_MOVIE_WATCHLIST": {
      const watchlistObj = action.payload.watchlistObj;
      var newArr;
      newArr = state.watchlistMovieArray.filter(ele => {
        return ele.id !== watchlistObj.id;
      });
      return {
        ...state,
        watchlistTvShowsArray: newArr
      };
    }
    case "REMOVE_FROM_TV_SHOW_WATCHLIST": {
      const watchlistObj = action.payload.watchlistObj;
      var newArr;
      newArr = state.watchlistTvShowsArray.filter(ele => {
        return ele.id !== watchlistObj.id;
      });
      return {
        ...state,
        watchlistTvShowsArray: newArr
      };
    }
    default: {
      return state;
    }
  }
};

export default watchlistReducer;
