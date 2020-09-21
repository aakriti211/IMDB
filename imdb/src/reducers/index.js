import { combineReducers } from "redux";
import tvShowsReducer from "./tvShowsReducers";
import watchlistReducer from "./watchlistReducer";

const rootReducer = combineReducers({
  tvShows: tvShowsReducer,
  watchlist: watchlistReducer
});

export default rootReducer;
