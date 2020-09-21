import React from "react";
import { Spinner, Modal } from "react-bootstrap";
import "../assets/css/Loader.css";

const Loader = props => {
  return (
    <Modal
      show={props.showSpinner}
      keyboard={false}
      backdrop="static"
      id="spinnerModal"
    >
      <Spinner animation="border" variant="primary" />
    </Modal>
  );
};

export default Loader;
