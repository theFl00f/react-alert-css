import React, { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { Button } from "./Button";

export const Modal = ({ children, openButtonText, handlePublish }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    closeModal();
    handlePublish();
  };

  ReactModal.setAppElement("#root");

  return (
    <>
      <div className="mb-2">
        <Button onClick={openModal}>{openButtonText}</Button>
      </div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {handlePublish && (
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
  handlePublish: PropTypes.func.isRequired,
};
