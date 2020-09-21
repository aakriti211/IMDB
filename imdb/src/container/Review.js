import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { ApplicationContext } from "../components/ApplicationProvider";
import NavigationBar from "../components/NavigationBar";
import { optionData } from "../utils/OptionData";
import "../assets/css/Review.css";
import Axios from "axios";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      starSelectedID: 0,
      submitted: false,
      selectedOption: "",
      allMoviesList: [],
      allTvShowsList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
    Review.contextType = ApplicationContext;
  }

  componentDidMount() {
    Axios.get("/movies/all").then(response => {
      this.setState({
        allMoviesList: response.data
      });
    });
    Axios.get("/tvShows/all").then(response => {
      this.setState({
        allTvShowsList: response.data
      });
    });
  }

  handleChange(event) {
    if (!this.feedbackList) {
      this.feedbackList = event.target.value;
    } else {
      this.feedbackList += event.target.value;
    }
  }

  submitChange(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  render() {
    var id = window.location.search.substring(4);
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
      starArray.push(
        <i
          onClick={() => {
            this.setState({
              starSelectedID: i
            });
          }}
          key={i}
          id={i <= this.state.starSelectedID ? "filled" : "empty"}
          className="fa fa-star-o fa-5x "
          aria-hidden="true"
        ></i>
      );
    }
    let optionList = optionData.map(element => {
      return <option>{element}</option>;
    });
    let feedbackArray = [];
    for (let i = 0; i < this.state.selectedOption; i++) {
      feedbackArray.push(
        <Form.Group onSubmit={this.submitChange}>
          <Form.Control
            onChange={this.handleChange}
            as="textarea"
            method="POST"
          />
        </Form.Group>
      );
    }
    return (
      <div className="starCollection">
        <NavigationBar />
        {starArray}
        <Form.Group
          style={{ width: "500px", marginLeft: "600px", marginTop: "100px" }}
        >
          <Form.Label>Please write your review</Form.Label>
          <Form.Control
            as="select"
            onChange={e => this.setState({ selectedOption: e.target.value })}
          >
            {optionList}
          </Form.Control>
        </Form.Group>

        <div style={{ width: "500px", marginLeft: "600px" }}>
          {feedbackArray}
          <Button variant="primary" onClick={this.submitChange} value="Submit">
            SUBMIT
          </Button>
          <p style={{ marginTop: "50px" }}>
            {this.state.submitted ? this.feedbackList : ""}
          </p>
        </div>
      </div>
    );
  }
}
export default Review;
