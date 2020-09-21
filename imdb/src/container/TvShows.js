import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import TvLogo from "../assets/images/TvShowLogo.jpg";
import ReactTable from "react-table-6";
import { columnConfigGenerator } from "../utils/columnConfig";
import { withRouter } from "react-router-dom";
import * as tvShowsAction from "../actions/tvShowsAction";
import { connect } from "react-redux";
import "../assets/css/TvShows.css";
import "react-table-6/react-table.css";
import "../assets/css/Movies.css";

class TvShows extends Component {
  constructor() {
    super();
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.tvShowsData.length === 0) {
      this.props.fetchTvShowsData();
    }
  }

  onClickHandler(event) {
    this.props.history.push(`/tvshows/description?id=${event.target.id}`);
  }

  render() {
    const accessorObject = {
      icon: "icon",
      name: "name",
      imdbRating: "imdbRating"
    };
    const headerObject = {
      movieIcon: "TV Show Icon",
      name: "Name",
      imdbRating: "IMDB Rating"
    };
    return (
      <div>
        <NavigationBar />
        <div>
          <img className="poster" src={TvLogo} alt="TV Logo" />
        </div>
        <div>
          <ReactTable
            className="data-table"
            columns={columnConfigGenerator(
              accessorObject,
              headerObject,
              this.onClickHandler
            )}
            data={this.props.tvShowsData}
            showPagination={true}
            showPageSizeOptions={false}
            pageSize={5}
            minRows={1}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const tvShows = state.tvShows;
  return {
    tvShowsData: tvShows.tvShowsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTvShowsData: () => {
      dispatch(tvShowsAction.fetchTvShowsData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TvShows));
