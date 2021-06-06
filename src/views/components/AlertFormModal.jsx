import React from "react";
import ReactModal from "react-modal";
import { Button } from "./Button";
import PropTypes from "prop-types";

export const AlertFormModal = ({ isOpen, setIsOpen, afterClose, children }) => {
  const handleClick = () => {
    closeModal();
    afterClose && afterClose();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      {children}
      {afterClose && (
        <div className="flex justify-end">
          <Button onClick={handleClick}>Submit</Button>
        </div>
      )}
    </ReactModal>
  );
};

AlertFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  afterClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
