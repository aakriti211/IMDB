import React, { useState, useEffect } from "react";
import { ApplicationContext } from "../components/ApplicationProvider";
import { WatchlistColumnConfig } from "../utils/WatchlistColumnConfig";
import ReactTable from "react-table-6";
import Axios from "axios";
import NavigationBar from "../components/NavigationBar";
import { connect } from "react-redux";
import "../assets/css/Watchlist.css";
import "react-table-6/react-table.css";
import "../assets/css/Movies.css";

const Watchlist = props => {
  const [filteredMovieImdbRating, setFilteredMovieImdbRating] = useState([]);
  const [filteredTvImdbRating, setFilteredTvImdbRating] = useState([]);
  const data = React.useContext(ApplicationContext);

  const accessorObject = {
    icon: "icon",
    name: "name",
    imdbRating: "imdbRating"
  };
  const headerObject = {
    icon: "Icon",
    name: "Name",
    imdbRating: "IMDB Rating"
  };

  useEffect(() => {
    let watchlistMovieTemp = [];
    Axios.get("/movies/all").then(response => {
      response.data.forEach(element => {
        if (props.watchlistMovieData.indexOf(element.id) >= 0) {
          watchlistMovieTemp.push(element);
        }
      });
      setFilteredMovieImdbRating(watchlistMovieTemp);
    });
  }, []);

  useEffect(() => {
    let watchlistTvTemp = [];
    Axios.get("/tvShows/all").then(response => {
      response.data.forEach(element => {
        if (props.watchlistTvShowData.indexOf(element.id) >= 0) {
          watchlistTvTemp.push(element);
        }
      });
      setFilteredTvImdbRating(watchlistTvTemp);
    });
  }, []);

  const searchHandler = filterRating => {
    let operator = filterRating[0];
    let operand;
    if (filterRating[1] == "=") {
      operator += filterRating[1];
      operand = filterRating.substring(2, filterRating.length);
    } else {
      operand = filterRating.substring(1, filterRating.length);
    }
    let movieArray = [];
    props.watchListMovieData.forEach(element => {
      if (operator === ">") {
        if (element.imdbRating > operand) {
          movieArray.push(element);
        }
      } else if (operator === "<") {
        if (element.imdbRating < operand) {
          movieArray.push(element);
        }
      } else if (operator === ">=") {
        if (element.imdbRating >= operand) {
          movieArray.push(element);
        }
      } else if (operator === "<=") {
        if (element.imdbRating <= operand) {
          movieArray.push(element);
        }
      } else if (operator === "==") {
        if (element.imdbRating == operand) {
          movieArray.push(element);
        }
      } else if (operator === "!=") {
        if (element.imdbRating != operand) {
          movieArray.push(element);
        }
      }
    });
    setFilteredMovieImdbRating(movieArray);

    let tvArray = [];
    props.watchlistTvShowData.forEach(element => {
      if (operator === ">") {
        if (element.imdbRating > operand) {
          tvArray.push(element);
        }
      } else if (operator === "<") {
        if (element.imdbRating < operand) {
          tvArray.push(element);
        }
      } else if (operator === ">=") {
        if (element.imdbRating >= operand) {
          tvArray.push(element);
        }
      } else if (operator === "<=") {
        if (element.imdbRating <= operand) {
          tvArray.push(element);
        }
      } else if (operator === "==") {
        if (element.imdbRating == operand) {
          tvArray.push(element);
        }
      } else if (operator === "!=") {
        if (element.imdbRating != operand) {
          tvArray.push(element);
        }
      }
    });
    setFilteredTvImdbRating(tvArray);
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <div className="search-container">
        <input
          placeholder="Search via IMDB Rating"
          className="search-input"
          onChange={e => {
            searchHandler(e.target.value);
          }}
        />
      </div>
      <div style={{ marginBottom: "100px" }}>
        <ReactTable
          className="data-table"
          columns={WatchlistColumnConfig(accessorObject, headerObject)}
          data={filteredMovieImdbRating}
          pageSize={filteredMovieImdbRating.length}
          showPagination={false}
          minRows={0}
        />
      </div>
      <div>
        <ReactTable
          className="data-table"
          columns={WatchlistColumnConfig(accessorObject, headerObject)}
          data={filteredTvImdbRating}
          pageSize={filteredTvImdbRating.length}
          showPagination={false}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const watchlist = state.watchlist;
  return {
    watchlistMovieData: watchlist.watchlistMovieArray,
    watchlistTvShowData: watchlist.watchlistTvShowsArray
  };
};

export default connect(mapStateToProps)(Watchlist);
