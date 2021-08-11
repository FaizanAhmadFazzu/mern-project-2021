import React from 'react'
import Modal from '../../../components/UI/Modal/'

const AddNewEmployeeModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        onSubmit
    } = props;
    return (
        <Modal 
            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}
            buttons = {[
                {
                    label: 'Save',
                    color: 'success',
                    onClick: onSubmit
                },
                {
                    label: 'Close',
                    color: 'danger',
                    onClick: handleClose
                }
            ]}
        >

        </Modal>
    )
}

export default AddNewEmployeeModal

