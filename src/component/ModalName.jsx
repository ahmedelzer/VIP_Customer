import React from "react";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
function ModalName() {
  const { name } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
        navigate("/"); // Navigate to home after closing modal
      }, 10000);
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [name, navigate]);
  return (
    <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
      <ModalHeader toggle={() => setShowModal(false)}>Welcome</ModalHeader>
      <ModalBody>{`Hello, ${name}!`}</ModalBody>
    </Modal>
  );
}

export default ModalName;
