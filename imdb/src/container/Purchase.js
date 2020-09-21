import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import ReactTable from "react-table-6";
import Axios from "axios";
import { Nav, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../assets/css/Purchase.css";
import "react-table-6/react-table.css";
import "../assets/css/Movies.css";
import GenericModal from "../components/GenericModal";
import { ApplicationContext } from "../components/ApplicationProvider";

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      moviesData: [],
      tvData: [],
      selectedTab: "1",
      checkboxSelected: [],
      allSelectedCheckbox: false,
      showModal: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleShowChanges = this.handleShowChanges.bind(this);
    Purchase.contextType = ApplicationContext;
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

  handleSelect(eventKey) {
    this.setState({
      selectedTab: eventKey,
      checkboxSelected: [],
      allSelectedCheckbox: false
    });
  }

  onChangeSelectCheckbox(event, data) {
    var newArr = this.state.checkboxSelected;
    if (event.target.checked) {
      newArr.push(data.id);
      this.setState({
        checkboxSelected: newArr,
        allSelectedCheckbox: false
      });
    } else {
      newArr.forEach((element, index) => {
        if (element === data.id) {
          newArr.splice(index, 1);
        }
      });
      this.setState({
        checkboxSelected: newArr,
        allSelectedCheckbox: false
      });
    }
  }

  allCheckboxSelected(event, data) {
    var tempArr = [];
    if (event.target.checked) {
      data.forEach(element => {
        tempArr.push(element._original.id);
      });
      this.setState({
        checkboxSelected: tempArr,
        allSelectedCheckbox: true
      });
    } else {
      this.setState({
        checkboxSelected: [],
        allSelectedCheckbox: false
      });
    }
  }

  sortList(item1, item2) {
    return item1.imdbRating - item2.imdbRating;
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleShowChanges() {
    this.context.setPurchaseList([
      ...this.state.checkboxSelected,
      ...this.context.purchaseList
    ]);
    this.props.history.push("/buy-now/purchase");
  }

  render() {
    this.state.allItems = [...this.state.moviesData, ...this.state.tvData];
    let dataArray = [];
    if (this.state.selectedTab === "1") {
      dataArray = this.state.allItems;
    } else if (this.state.selectedTab === "2") {
      dataArray = this.state.moviesData;
    } else if (this.state.selectedTab === "3") {
      dataArray = this.state.tvData;
    }
    dataArray.sort(this.sortList);
    let tempArr = dataArray.filter(element => {
      return this.context.purchaseList.indexOf(element.id) < 0;
    });
    dataArray = tempArr;
    const columnConfig = [
      {
        accessor: "checkbox",
        Header: cellInfo => {
          return (
            <React.Fragment>
              <span style={{ marginRight: "20px" }}>All</span>
              <input
                type="checkbox"
                id="selectAllCheckbox"
                checked={this.state.allSelectedCheckbox}
                style={{
                  backgroundColor: "#fafafa",
                  width: "24px",
                  height: "24px",
                  border: "1px solid #007dc6"
                }}
                onChange={e => {
                  this.allCheckboxSelected(e, cellInfo.data);
                }}
              />
            </React.Fragment>
          );
        },
        Cell: cellInfo => {
          return (
            <input
              type="checkbox"
              id={cellInfo.original.id}
              checked={
                this.state.checkboxSelected.indexOf(cellInfo.original.id) >= 0
                  ? true
                  : false
              }
              style={{
                backgroundColor: "#fafafa",
                width: "16px",
                height: "16px",
                border: "1px solid #007dc6",
                position: "relative",
                marginLeft: "30px"
              }}
              onChange={e => {
                this.onChangeSelectCheckbox(e, cellInfo.original);
              }}
            />
          );
        },
        width: "25%",
        sortable: false
      },
      {
        Header: "Icon",
        accessor: "icon",
        Cell: row => {
          return (
            <div>
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "20px"
                }}
                id={row.original.id}
                src={row.original.icon}
                alt="Icon"
              />
            </div>
          );
        },
        width: "25%",
        sortable: false
      },
      {
        Header: "Title",
        accessor: "name",
        width: "25%",
        sortable: false
      },
      {
        Header: "IMDB Rating",
        accessor: "imdbRating",
        width: "25%",
        sortable: false
      }
    ];
    const modalContent = {
      modalTitle: "Purchase products",
      modalBody: "Are you sure you want to buy these products?",
      primaryButton: "Yes",
      secondaryButton: "No"
    };
    return (
      <React.Fragment>
        <NavigationBar />
        <div className="animation">
          <i class="fa fa-male fa-5x" aria-hidden="true"></i>
          <i class="fa fa-money fa-5x" aria-hidden="true"></i>
          <i class="fa fa-shopping-cart fa-5x" aria-hidden="true"></i>
        </div>
        <Nav
          style={{ marginLeft: "28px", marginTop: "100px" }}
          variant="tabs"
          activeKey={this.state.selectedTab}
          onSelect={e => {
            this.handleSelect(e);
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="1">{`All Items (${this.state.allItems.length})`}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">{`Movies (${this.state.moviesData.length})`}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">{`TV Shows (${this.state.tvData.length})`}</Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
        {this.state.checkboxSelected.length ? (
          <Button
            style={{ marginLeft: "1000px" }}
            variant="primary"
            onClick={this.handleShow}
          >
            Buy
          </Button>
        ) : (
          <Button style={{ marginLeft: "1000px" }} variant="light">
            Buy
          </Button>
        )}
        <ReactTable
          className="data-table"
          columns={columnConfig}
          data={dataArray}
          showPagination={true}
          showPageSizeOptions={false}
          pageSize={15}
          minRows={1}
        />
        <GenericModal
          show={this.state.showModal}
          closeModal={this.handleClose}
          showData={this.handleShowChanges}
          title={modalContent.modalTitle}
          body={modalContent.modalBody}
          saveChanges={modalContent.primaryButton}
          discardChanges={modalContent.secondaryButton}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(Purchase);
