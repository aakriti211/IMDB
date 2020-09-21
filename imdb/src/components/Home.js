import React from "react";
import NavigationBar from "./NavigationBar";
import Slides from "./Carousel";
import "../assets/css/Header.css";
import "../assets/css/Trending.css";
import Trending from "../container/Trending";

const Home = () => {
  var titleMovie = "Trending Movies";
  var titleTvShows = "Trending TV Shows";
  return (
    <div>
      <NavigationBar />
      <Slides />
      <h1 className="heading">
        {titleMovie}
        <Trending title={titleMovie} />
      </h1>
      <h1 className="heading">
        {titleTvShows}
        <Trending title={titleTvShows} />
      </h1>
    </div>
  );
};

export default Home;
