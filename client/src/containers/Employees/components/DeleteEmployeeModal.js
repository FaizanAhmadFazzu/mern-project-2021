import React from "react";
import Modal from "../../../components/UI/Modal";

const DeleteEmployeeModal = (props) => {
  const { show, handleClose, modalTitle, onSubmit } = props;
  return (
    <Modal 
    show={show}
    handleClose={handleClose}
    modalTitle={modalTitle}
    buttons={[
        {
          label: "Close",
          color: "default",
          onClick: handleClose,
        },
        {
          label: "Delete",
          color: "danger",
          onClick: onSubmit,
        },
      ]}
    >
      <p>Are you sure you want to delete these Records?</p>
      <p className="text-warning">
        <small>This action cannot be undone.</small>
      </p>
    </Modal>
  );
};

export default DeleteEmployeeModal;
