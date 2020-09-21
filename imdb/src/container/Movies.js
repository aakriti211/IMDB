import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import MovieLogo from "../assets/images/Movie.jpg";
import ReactTable from "react-table-6";
import axios from "axios";
import { columnConfigGenerator } from "../utils/columnConfig";
import { withRouter } from "react-router-dom";
import "react-table-6/react-table.css";
import "../assets/css/Movies.css";

const Movies = props => {
  const [movieData, setMovieData] = useState([]);

  const accessorObject = {
    icon: "icon",
    name: "name",
    imdbRating: "imdbRating"
  };
  const headerObject = {
    movieIcon: "Movie Icon",
    name: "Name",
    imdbRating: "IMDB Rating"
  };

  useEffect(() => {
    axios.get("/movies/all").then(response => {
      setMovieData(response.data);
    });
  }, []);

  const onClickHandler = event => {
    // window.open("/movies/description");
    props.history.push(`/movies/description?id=${event.target.id}`);
  };
  return (
    <div style={{ background: "gainsboro" }}>
      <NavigationBar />
      <div>
        <img className="movie-poster" src={MovieLogo} alt="Movie Poster" />
      </div>
      <div>
        <ReactTable
          className="data-table"
          columns={columnConfigGenerator(
            accessorObject,
            headerObject,
            onClickHandler
          )}
          data={movieData}
          showPagination={true}
          showPageSizeOptions={false}
          pageSize={5}
          minRows={1}
        />
      </div>
    </div>
  );
};

export default withRouter(Movies);
