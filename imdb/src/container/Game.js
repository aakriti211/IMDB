import React, { Component } from "react";
import Axios from "axios";
import NavigationBar from "../components/NavigationBar";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../assets/css/Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      moviesWatched: [],
      watchlistMovie: [],
      tvData: [],
      tvWatched: [],
      watchlistTV: []
    };
  }

  sortFunction(a, b) {
    return a.imdbRating - b.imdbRating;
  }

  componentDidMount() {
    Axios.get("/movies/all").then(response => {
      let sortArray = response.data;
      sortArray.sort(this.sortFunction);
      this.setState({
        movieData: [...response.data],
        moviesWatched: [...sortArray]
      });
    });
    Axios.get("/tvShows/all").then(response => {
      let sortArray = response.data;
      sortArray.sort(this.sortFunction);
      this.setState({
        tvData: [...response.data],
        tvWatched: [...response.data]
      });
    });
  }

  onClickAdd(type, buttonClickedObj) {
    if (type === "movies") {
      var addArray = this.state.watchlistMovie;
      var removeArray = this.state.moviesWatched;
      addArray.push(buttonClickedObj);
      addArray.sort(this.sortFunction);
      this.setState({
        watchlistMovie: addArray
      });
      removeArray.forEach((element, index) => {
        if (element.name === buttonClickedObj.name) {
          removeArray.splice(index, 1);
        }
      });
      this.setState({
        moviesWatched: removeArray
      });
    } else if (type === "tvshows") {
      var addArray = this.state.watchlistTV;
      var removeArray = this.state.tvWatched;
      addArray.push(buttonClickedObj);
      addArray.sort(this.sortFunction);
      this.setState({
        watchlistTV: addArray
      });
      removeArray.forEach((element, index) => {
        if (element.name === buttonClickedObj.name) {
          removeArray.splice(index, 1);
        }
      });
      this.setState({
        tvWatched: removeArray
      });
    }
  }

  onClickRemove(type, buttonClickedObj) {
    if (type === "movies") {
      var addArray = this.state.moviesWatched;
      var removeArray = this.state.watchlistMovie;
      addArray.push(buttonClickedObj);
      addArray.sort(this.sortFunction);
      this.setState({
        moviesWatched: addArray
      });
      removeArray.forEach((element, index) => {
        if (element.name === buttonClickedObj.name) {
          removeArray.splice(index, 1);
        }
      });
      this.setState({
        watchlistMovie: removeArray
      });
    } else if (type === "tvshows") {
      var addArray = this.state.tvWatched;
      var removeArray = this.state.watchlistTV;
      addArray.push(buttonClickedObj);
      addArray.sort(this.sortFunction);
      this.setState({
        tvWatched: addArray
      });
      removeArray.forEach((element, index) => {
        if (element.name === buttonClickedObj.name) {
          removeArray.splice(index, 1);
        }
      });
      this.setState({
        watchlistTV: removeArray
      });
    }
  }

  render() {
    let movieList = this.state.moviesWatched.map(element => {
      return (
        <div
          onClick={() => {
            this.onClickAdd("movies", {
              id: element.id,
              name: element.name,
              imdbRating: element.imdbRating,
              icon: element.icon
            });
          }}
        >
          <Button style={{ marginBottom: "10px" }} variant="outline-secondary">
            {element.name} ({element.imdbRating})
            <Button
              style={{ marginLeft: "10px", width: "40px" }}
              variant="info"
            >
              +
            </Button>
          </Button>
        </div>
      );
    });

    let tvList = this.state.tvWatched.map(element => {
      return (
        <div
          onClick={() => {
            this.onClickAdd("tvshows", {
              id: element.id,
              name: element.name,
              imdbRating: element.imdbRating,
              icon: element.icon
            });
          }}
        >
          <Button style={{ marginBottom: "10px" }} variant="outline-secondary">
            {element.name} ({element.imdbRating})
            <Button
              style={{ marginLeft: "10px", width: "40px" }}
              variant="info"
            >
              +
            </Button>
          </Button>
        </div>
      );
    });

    let displayWatchlistMovie = this.state.watchlistMovie.map(element => {
      return (
        <div
          onClick={() => {
            this.onClickRemove("movies", {
              id: element.id,
              name: element.name,
              imdbRating: element.imdbRating,
              icon: element.icon
            });
          }}
        >
          <Button style={{ marginBottom: "10px" }} variant="outline-secondary">
            {element.name} ({element.imdbRating})
            <Button
              style={{ marginLeft: "10px", width: "40px" }}
              variant="info"
            >
              -
            </Button>
          </Button>
        </div>
      );
    });

    let displayWatchlistTV = this.state.watchlistTV.map(element => {
      return (
        <div
          onClick={() => {
            this.onClickRemove("tvshows", {
              id: element.id,
              name: element.name,
              imdbRating: element.imdbRating,
              icon: element.icon
            });
          }}
        >
          <Button style={{ marginBottom: "10px" }} variant="outline-secondary">
            {element.name} ({element.imdbRating})
            <Button
              style={{ marginLeft: "10px", width: "40px" }}
              variant="info"
            >
              -
            </Button>
          </Button>
        </div>
      );
    });

    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <div class="column">
            <h5>Movie List</h5>
            {movieList}
          </div>
          <div class="column">
            <h5>Watchlist Movies</h5>
            {displayWatchlistMovie}
          </div>
          <div class="column">
            <h5>TV Shows</h5>
            {tvList}
          </div>
          <div class="column">
            <h5>Watchlist TV Shows</h5>
            {displayWatchlistTV}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Game);
