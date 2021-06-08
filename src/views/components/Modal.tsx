import React, { FC, useState } from "react";
import ReactModal from "react-modal";
import { Button } from "./Button";

interface Props {
  openButtonText: string;
  afterClose?: () => void;
}

export const Modal: FC<Props> = ({ children, openButtonText, afterClose }) => {
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
