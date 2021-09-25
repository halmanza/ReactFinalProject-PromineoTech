import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "react-bootstrap";
import PropTypes from "prop-types";

const ModalSave = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log("its false");
  };

  const trigger = props.trigger;

  useEffect(() => {
    trigger === true ? setShow(true) : setShow(false);
  }, [trigger]);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <ModalTitle>Please help this project</ModalTitle>
      </Modal.Header>
      <ModalBody>
        We ask everyone using the service to contribute their data to help us
        model how students are managering their time. It's completely voluntary
        and we don't sell this information. We use it to better improve our
        service for students. Also, in the future it will determine if we can
        find better ways to help students visualize their time.
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalSave;

ModalSave.propTypes = {
  trigger: PropTypes.number,
};
