import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../assets/css/Subscription.css";
import Axios from "axios";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: []
    };
  }
  componentDidMount() {
    Axios.get("/imdbPro-subscription").then(response => {
      this.setState({
        cardContent: response.data
      });
    });
  }
  render() {
    let cardArray = this.state.cardContent.map(element => {
      return (
        <span>
          <Card className="card">
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {element.subtitle}
              </Card.Subtitle>
              <Card.Text>{element.text}</Card.Text>
              <Button variant="primary">Subscribe</Button>
            </Card.Body>
          </Card>
        </span>
      );
    });
    return <div style={{ display: "flex" }}>{cardArray}</div>;
  }
}
export default Subscription;
