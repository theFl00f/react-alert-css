import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

export const AlertFormModal = ({ isOpen, setIsOpen, children }) => {
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
    </ReactModal>
  );
};

AlertFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
