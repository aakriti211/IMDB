import React, { Component } from "react";
import { ApplicationContext } from "../components/ApplicationProvider";
import Axios from "axios";
import Cards from "../components/Cards";
import { connect } from "react-redux";
import * as watchlistAction from "../actions/watchlistAction";
import "../assets/css/Trending.css";

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      watchlistTvShowsArray: []
    };
    Trending.contextType = ApplicationContext;
  }
  componentDidMount() {
    {
      this.props.title === "Trending TV Shows"
        ? Axios.get("/trending-tv-shows").then(response => {
            this.setState({
              cardData: response.data
            });
          })
        : Axios.get("/trending-movies").then(response => {
            this.setState({
              cardData: response.data
            });
          });
    }
  }
  populateWatchlist(event) {
    if (this.props.title === "Trending TV Shows") {
      this.props.addToTvShowWatchlist(event.target.id);
    } else if (this.props.title === "Trending Movies") {
      this.props.addToMovieWatchlist(event.target.id);
    }
  }

  unPopulateWatchlist(event) {
    if (this.props.title === "Trending TV Shows") {
      this.props.removeFromMovieWatchlist(event.target.id);
    } else if (this.props.title === "Trending Movies") {
      this.props.removeFromTvShowWatchlist(event.target.id);
    }
  }

  render() {
    let cardArray = this.state.cardData.map(element => {
      return (
        <div>
          <Cards
            image={element.icon}
            imdbRating={element.imdbRating}
            movieName={element.name}
            id={element.id}
            activeButton="+ Watchlist"
            inActiveButton="- Watchlisted"
            watchlistArray={
              this.props.title === "Trending TV Shows"
                ? this.props.watchlistTvShowData
                : this.props.watchlistMovieData
            }
            populateList={e => this.populateWatchlist(e)}
            unPopulateList={e => this.unPopulateWatchlist(e)}
            title={this.props.title}
            reviewButton="Review"
          />
        </div>
      );
    });
    return <div style={{ display: "flex" }}>{cardArray}</div>;
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
