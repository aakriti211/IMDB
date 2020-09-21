import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import Select from "react-select";
import "../assets/css/Catalogue.css";
import Axios from "axios";
import { InputGroup, Form, Button } from "react-bootstrap";
import BackgroundImage from "../assets/images/marvel.jpg";
import CatalogueBought from "./CatalogueBought";

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      moviesData: [],
      tvData: [],
      filteredMovieList: [],
      filteredTvList: [],
      selectedItem: "",
      checkboxSelected: [],
      isBought: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Axios.get("/movies/all").then(response => {
      this.setState({
        moviesData: response.data,
        filteredMovieList: response.data
      });
    });

    Axios.get("/tvShows/all").then(response => {
      this.setState({
        tvData: response.data,
        filteredTvList: response.data
      });
    });
  }

  handleChange(selectedOption) {
    this.setState({
      selectedValue: selectedOption,
      selectedItem: "",
      checkboxSelected: []
    });
  }

  searchHandler(filterData) {
    if (this.state.selectedValue.value === "movies") {
      let movieArray = [];
      this.state.moviesData.forEach(element => {
        if (element.name.toLowerCase().indexOf(filterData.toLowerCase()) >= 0) {
          movieArray.push(element);
        }
      });
      this.setState({
        filteredMovieList: movieArray
      });
    } else if (this.state.selectedValue.value === "tvShows") {
      let tvArray = [];
      this.state.tvData.forEach(element => {
        if (element.name.toLowerCase().indexOf(filterData.toLowerCase()) >= 0) {
          tvArray.push(element);
        }
      });
      this.setState({
        filteredTvList: tvArray
      });
    }
  }

  onClickDisplay(event, element) {
    this.setState({
      checkboxSelected: [],
      selectedItem: element
    });
  }

  checkboxSelectedHandler(event, element) {
    var tempArr = this.state.checkboxSelected;
    if (event.target.checked) {
      tempArr.push(element);
      this.setState({
        checkboxSelected: tempArr
      });
    } else {
      let newArr = tempArr.filter(ele => {
        return element.name !== ele.name;
      });
      this.setState({
        checkboxSelected: newArr
      });
    }
  }

  calculateFinalPrice() {
    // var priceArray = [],
    //   sum;
    // this.state.checkboxSelected.forEach(element => {
    //   priceArray.push(element.price);
    // });
    // sum = priceArray.reduce((sum, num) => sum + num, 0);

    var sum = 0;
    this.state.checkboxSelected.forEach(element => {
      sum = sum + element.price;
    });
    return sum;
  }

  render() {
    let dataList;
    if (this.state.selectedValue.value === "movies") {
      dataList = this.state.filteredMovieList.map(element => {
        return (
          <div
            className="data-list"
            onClick={e => this.onClickDisplay(e, element)}
          >
            {element.name}
          </div>
        );
      });
    } else if (this.state.selectedValue.value === "tvShows") {
      dataList = this.state.filteredTvList.map(element => {
        return (
          <div
            className="data-list"
            onClick={e => this.onClickDisplay(e, element)}
          >
            {element.name}
          </div>
        );
      });
    }
    const options = [
      { value: "movies", label: "Movies" },
      { value: "tvShows", label: "TV Shows" }
    ];

    const checkboxLabel = [
      { name: "Plot", price: 2000 },
      { name: "Themes and Tone", price: 1800 },
      { name: "Acting and Characters", price: 1700 },
      { name: "Direction", price: 1600 },
      { name: "Score", price: 1500 },
      { name: "Cinematography", price: 1400 },
      { name: "Production Design", price: 1300 },
      { name: "Special Effects", price: 1200 },
      { name: "Editing", price: 1100 },
      { name: "Pace", price: 1000 },
      { name: "Dialogue", price: 900 }
    ];

    let checkboxValueList = checkboxLabel.map(element => {
      var tempArr = this.state.checkboxSelected.map(element => {
        return element.name;
      });
      return (
        <Form.Group>
          <Form.Check
            type="checkbox"
            label={`${element.name} - \u20B9${element.price}`}
            onClick={e => {
              this.checkboxSelectedHandler(e, element);
            }}
            checked={tempArr.indexOf(element.name) >= 0 ? true : false}
          />
        </Form.Group>
      );
    });

    return (
      <React.Fragment>
        <NavigationBar />
        {!this.state.isBought ? (
          <div className="main-content">
            <div className="sidebar">
              <div className="select-container">
                <Select
                  value={this.state.selectedValue}
                  options={options}
                  onChange={this.handleChange}
                ></Select>
              </div>
              <InputGroup className="input-group">
                <input
                  placeholder="Search via name"
                  className="form-control"
                  onChange={e => {
                    this.searchHandler(e.target.value);
                  }}
                />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <div className="display-list">{dataList}</div>
            </div>
            {this.state.selectedItem ? (
              <div className="display-content">
                <img className="background-image" src={BackgroundImage}></img>
                <div className="item-info">
                  <img
                    style={{
                      width: "300px",
                      height: "300px"
                    }}
                    src={this.state.selectedItem.icon}
                  ></img>
                  <span style={{ marginLeft: "20px" }}>
                    {this.state.selectedItem.name} (
                    {this.state.selectedItem.imdbRating})
                  </span>
                  <div
                    style={{
                      marginTop: "60px",
                      marginRight: "500px",
                      fontSize: "20px"
                    }}
                  >
                    <h4>What did you like the most?</h4>
                    <div style={{ marginBottom: "50px" }}>
                      {checkboxValueList}
                    </div>
                    <div>Final Cost: {this.calculateFinalPrice()}</div>
                    {this.state.checkboxSelected.length ? (
                      <div className="button-container">
                        <Button
                          variant="primary"
                          onClick={() => {
                            this.setState({
                              isBought: true
                            });
                          }}
                        >
                          BUY
                        </Button>
                      </div>
                    ) : (
                      <div className="button-container">
                        <Button variant="light">BUY</Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <CatalogueBought />
        )}
      </React.Fragment>
    );
  }
}

export default Catalogue;
