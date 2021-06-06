import React, { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { Button } from "./Button";

export const Modal = ({ children, openButtonText, afterClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    closeModal();
    afterClose && afterClose();
  };

  ReactModal.setAppElement("#root");

  return (
    <>
      <div className="self-end mb-2">
        <Button onClick={openModal}>{openButtonText}</Button>
      </div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {afterClose && (
          <div className="flex justify-end">
            <Button onClick={handleClick}>Publish</Button>
          </div>
        )}
        {children}
      </ReactModal>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  openButtonText: PropTypes.string.isRequired,
  afterClose: PropTypes.func.isRequired,
};
