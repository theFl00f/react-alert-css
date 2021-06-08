import React, { Dispatch, FC, SetStateAction } from "react";
import ReactModal from "react-modal";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const AlertFormModal: FC<Props> = ({ isOpen, setIsOpen, children }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={{
        content: {
          backgroundColor: "#ae97f9",
          borderColor: "rgba(255, 255, 255, .5)",
        },
      }}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      {children}
    </ReactModal>
  );
};
