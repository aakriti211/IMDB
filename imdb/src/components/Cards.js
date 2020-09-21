import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  isCardWatchlisted(id, title) {
    if (
      title === "Trending TV Shows" &&
      this.props.watchlistTvShowData.indexOf(id) >= 0
    ) {
      return true;
    } else if (
      title === "Trending Movies" &&
      this.props.watchlistMovieData.indexOf(id) >= 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  onClickHandler(event) {
    if (this.props.title === "Trending TV Shows") {
      this.props.history.push(`/tvshows/description?id=${event.target.id}`);
    } else if (this.props.title === "Trending Movies") {
      this.props.history.push(`/movies/description?id=${event.target.id}`);
    }
  }

  onClickReview(event) {
    this.props.history.push(`/review?id=${event.target.id}`);
  }

  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          id={this.props.id}
          src={this.props.image}
          onClick={(e) => {
            this.onClickHandler(e);
          }}
        />
        <Card.Body>
          <Card.Title>Rating: {this.props.imdbRating}</Card.Title>
          <Card.Text>{this.props.movieName}</Card.Text>
          {!this.isCardWatchlisted(this.props.id, this.props.title) ? (
            <Button
              variant="primary"
              onClick={(e) => {
                this.props.populateList(e);
                this.setState({
                  isActive: false,
                });
              }}
              id={this.props.id}
            >
              {this.props.activeButton}
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={(e) => {
                this.props.unPopulateList(e);
                this.setState({
                  isActive: true,
                });
              }}
              id={this.props.id}
            >
              {this.props.inActiveButton}
            </Button>
          )}
          <Button
            style={{ marginLeft: "10px" }}
            variant="info"
            id={this.props.id}
            onClick={(e) => {
              this.onClickReview(e);
            }}
          >
            {this.props.reviewButton}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const watchlist = state.watchlist;
  return {
    watchlistMovieData: watchlist.watchlistMovieArray,
    watchlistTvShowData: watchlist.watchlistTvShowsArray,
  };
};

export default connect(mapStateToProps)(withRouter(Cards));
