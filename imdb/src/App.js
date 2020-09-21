import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Movies from "./container/Movies";
import TvShows from "./container/TvShows";
import IMDbPRO from "./container/IMDbPRO";
import Review from "./container/Review";
import Subscription from "./container/Subscription";
import ApplicationProvider from "./components/ApplicationProvider";
import Description from "./components/Description";
import Login from "./components/LogIn";
import Home from "./components/Home";
import Watchlist from "./container/Watchlist";
import Game from "./container/Game";
import Purchase from "./container/Purchase";
import Products from "./container/Products";
import Catalogue from "./container/Catalogue";
import Sample from "./container/Sample";

function App() {
  return (
    <div className="App">
      <ApplicationProvider>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/home" exact render={() => <Home />} />
        <Route path="/movies" exact render={() => <Movies />} />
        <Route path="/tv-shows" exact render={() => <TvShows />} />
        <Route path="/imdbPro" exact render={() => <IMDbPRO />} />
        <Route path="/review" exact render={() => <Review />} />
        <Route path="/watchlist" exact render={() => <Watchlist />} />
        <Route
          path="/imdbPro/imdbPro-subscription"
          exact
          render={() => <Subscription />}
        />
        <Route path="/:type/description" render={() => <Description />} />
        <Route path="/game" exact render={() => <Game />} />
        <Route path="/buy-now" exact render={() => <Purchase />} />
        <Route path="/buy-now/purchase" exact render={() => <Products />} />
        <Route path="/catalogue" exact render={() => <Catalogue />} />
        <Route path="/sample" exact render={() => <Sample />} />
      </ApplicationProvider>
    </div>
  );
}

export default App;
