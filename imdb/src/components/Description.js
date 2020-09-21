import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import "../assets/css/Description.css";
import { Button } from "react-bootstrap";
import { ApplicationContext } from "./ApplicationProvider";
import { connect } from "react-redux";
import * as watchlistAction from "../actions/watchlistAction";

const Description = props => {
  var type = window.location.pathname.split("/")[1];
  var id = window.location.search.substring(4);
  const data = React.useContext(ApplicationContext);

  const addToWatchlist = event => {
    if (type === "movies") {
      props.addToMovieWatchlist(event.target.id);
    } else if (type === "tvshows") {
      props.addToTvShowWatchlist(event.target.id);
    }
  };

  const removeFromWatchList = event => {
    if (type === "movies") {
      props.removeFromMovieWatchlist(event.target.id);
    } else if (type === "tvshows") {
      props.removeFromTvShowWatchlist(event.target.id);
    }
  };

  const isWatchListed = () => {
    if (type === "movies" && props.watchlistMovieData.indexOf(id) >= 0) {
      return true;
    } else if (
      type === "tvshows" &&
      props.watchlistTvShowData.indexOf(id) >= 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <NavigationBar />
      <iframe
        style={{ marginTop: "100px" }}
        width="1206"
        height="678"
        src="https://www.youtube.com/embed/J2LBttJgCTk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="heading">Description</div>
      <div className="body">
        <p>
          A vertical prison with one cell per level. Two people per cell. One
          only food platform and two minutes per day to feed from up to down. An
          endless nightmare trapped in The Hole.
        </p>
        {!isWatchListed() ? (
          <Button
            variant="primary"
            size="lg"
            onClick={e => {
              addToWatchlist(e);
            }}
            id={id}
          >
            + Watchlist
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="lg"
            onClick={e => {
              removeFromWatchList(e);
            }}
            id={id}
          >
            - Watchlisted
          </Button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const watchlist = state.watchlist;
  return {
    watchlistMovieData: watchlist.watchlistMovieArray,
    watchlistTvShowData: watchlist.watchlistTvShowsArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToMovieWatchlist: watchlistObj => {
      dispatch(watchlistAction.addToMovieWatchlist(watchlistObj));
    },
    addToTvShowWatchlist: watchlistObj => {
      dispatch(watchlistAction.addToTvShowWatchlist(watchlistObj));
    },
    removeFromMovieWatchlist: watchlistObj => {
      dispatch(watchlistAction.removeFromMovieWatchlist(watchlistObj));
    },
    removeFromTvShowWatchlist: watchlistObj => {
      dispatch(watchlistAction.removeFromTvShowWatchlist(watchlistObj));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
