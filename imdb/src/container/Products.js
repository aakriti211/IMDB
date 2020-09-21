import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import Axios from "axios";
import "../assets/css/Game.css";
import { ApplicationContext } from "../components/ApplicationProvider";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
      tvData: []
    };
    Products.contextType = ApplicationContext;
  }

  componentDidMount() {
    Axios.get("/movies/all").then(response => {
      this.setState({
        moviesData: response.data
      });
    });

    Axios.get("/tvShows/all").then(response => {
      this.setState({
        tvData: response.data
      });
    });
  }

  render() {
    var allItems = [...this.state.moviesData, ...this.state.tvData];
    var items = [];
    allItems.forEach(element => {
      if (this.context.purchaseList.indexOf(element.id) >= 0) {
        items.push(element);
      }
    });
    var itemPurchased = items.map(element => {
      return (
        <ul>
          {element.name} ({element.imdbRating})
        </ul>
      );
    });
    return (
      <React.Fragment>
        <NavigationBar />
        <div class="column">
          <h5>Item Purchased</h5>
          {itemPurchased}
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
