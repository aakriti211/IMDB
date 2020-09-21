import React from "react";
import Logo from "../assets/images/imdbLogo.svg";
import { Link } from "react-router-dom";
import "../assets/css/NavigationBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ApplicationContext } from "./ApplicationProvider";
import { withRouter } from "react-router-dom";

const NavigationBar = (props) => {
  const value = React.useContext(ApplicationContext);

  // if (value.email === "") {
  //   props.history.push("/login");
  // }

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>
        <Link to="/">
          <img className="logo" src={Logo} alt="IMDB" />
        </Link>
      </Navbar.Brand>
      <Nav className="nav-bar">
        <NavDropdown title="Menu">
          <NavDropdown.Item>
            <Link to="/movies">Movies</Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/tv-shows">TV Shows</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Brand
          style={{ color: "white", marginLeft: "50px", marginBottom: "10px" }}
        >
          <Link to="/imdbPro">IMDbPRO</Link>
        </Navbar.Brand>
        <Navbar.Brand
          style={{ color: "white", marginLeft: "50px", marginBottom: "10px" }}
        >
          <Link to="/game">Game</Link>
        </Navbar.Brand>
        <Navbar.Brand
          style={{ color: "white", marginLeft: "50px", marginBottom: "10px" }}
        >
          <Link to="/buy-now">Buy</Link>
        </Navbar.Brand>
        <Navbar.Brand
          style={{ color: "white", marginLeft: "50px", marginBottom: "10px" }}
        >
          <Link to="/catalogue">IMDB Catalogue</Link>
        </Navbar.Brand>
        <Navbar.Brand
          style={{ color: "white", marginLeft: "50px", marginBottom: "10px" }}
        >
          <Link to="/sample">Sample</Link>
        </Navbar.Brand>
        <Navbar.Brand style={{ marginLeft: "720px" }}>
          <Link to="/watchlist">
            <i class="fa fa-plus-square" aria-hidden="true"></i>Watchlist
          </Link>
        </Navbar.Brand>
        <ApplicationContext.Consumer>
          {(value) => {
            return (
              <Navbar.Brand style={{ marginLeft: "190px" }}>
                {value.firstName}
              </Navbar.Brand>
            );
          }}
        </ApplicationContext.Consumer>
      </Nav>
    </Navbar>
  );
};

export default withRouter(NavigationBar);
