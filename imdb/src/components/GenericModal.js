import React from "react";
import { Modal, Button } from "react-bootstrap";

const GenericModal = props => {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.closeModal}
        keyboard={false}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.showData}>
            {props.saveChanges}
          </Button>
          <Button variant="secondary" onClick={props.closeModal}>
            {props.discardChanges}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GenericModal;
