import React, { useState } from "react";
import IMDBPRO from "../assets/images/IMDBPRO.png";
import "../assets/css/IMDBPRO.css";
import Text from "../utils/Text";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import GenericModal from "../components/GenericModal";
import NavigationBar from "../components/NavigationBar";

const IMDbPRO = props => {
  const [showModal, setShowModal] = useState(false);

  const modalContent = {
    modalTitle: "IMDbPRO Subscription",
    modalBody: "Are you sure you want to subscribe to IMDbPRO ?",
    primaryButton: "Yes",
    secondaryButton: "No"
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleShowChanges = () => {
    props.history.push("/imdbPro/imdbPro-subscription");
  };

  return (
    <div className="background-image" style={{ marginTop: "70px" }}>
      <NavigationBar />
      <img className="pro-pic" src={IMDBPRO} alt="IMDB PRO" />
      <div class="text">
        <Text />
      </div>
      <Button
        className="pro-button"
        variant="warning"
        size="lg"
        block
        onClick={handleShow}
      >
        Try IMDbPRO Free
      </Button>
      <GenericModal
        show={showModal}
        closeModal={handleClose}
        showData={handleShowChanges}
        title={modalContent.modalTitle}
        body={modalContent.modalBody}
        saveChanges={modalContent.primaryButton}
        discardChanges={modalContent.secondaryButton}
      />
    </div>
  );
};

export default withRouter(IMDbPRO);
