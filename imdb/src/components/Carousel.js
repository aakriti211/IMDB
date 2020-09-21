import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/Carousel.css";

const Slides = props => {
  return (
    <div>
      <Carousel interval="2000">
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://www.hdwallpapers.in/download/avengers_infinity_war_superheroes_4k_3-HD.jpg"
            alt="Avengers"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://www.hdwallpapers.in/download/the_dark_knight_rises_official-wide.jpg"
            alt="The Dark Knight Rises"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://images.hdqwalls.com/wallpapers/spiderman-into-the-spider-verse-movie-poster-mt.jpg"
            alt="SpiderMan into the Spider Verse"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://i.pinimg.com/originals/bc/8e/d1/bc8ed144511819dda5b7cdfdfe925a01.jpg"
            alt="Moonlight"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"
            alt="The Oblivion"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slides;
