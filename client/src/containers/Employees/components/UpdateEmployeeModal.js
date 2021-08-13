import React from 'react';
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";
import { Row, Col } from "react-bootstrap";


const UpdateEmployeeModal = (props) => {
    const {
        show,
        handleClose,
        modalTitle,
        employee,
        onChange,
        onSubmit
    } = props;
    return (
       <Modal 
       show={show}
       handleClose={handleClose}
       modalTitle={modalTitle}
       employee={employee}
       onchange={onChange}
       buttons={[
        {
          label: "Close",
          color: "danger",
          onClick: handleClose,
        },
        {
          label: "Save",
          color: "info",
          onClick: onSubmit,
        },
      ]}
       >

        <Row>
            <Col>
            <Input 
            label={"Name"}
            type={'text'}
            placeholder={'Name'}
            name={'name'}
            value={employee.name}
            onChange={onChange}
            />
            </Col>
        </Row>
        <Row>
            <Col>
            <Input 
            label={"Email"}
            type={'email'}
            placeholder={'Email'}
            name={'email'}
            value={employee.email}
            onChange={onChange}
            />
            </Col>
        </Row>
        <Row>
            <Col>
            <Input 
            label={"Address"}
            type={'textarea'}
            placeholder={'Address'}
            name={'address'}
            value={employee.address}
            onChange={onChange}
            />
            </Col>
        </Row>
        <Row>
            <Col>
            <Input 
            label={"Phone"}
            type={'text'}
            placeholder={'Phone'}
            name={'phone'}
            value={employee.phone}
            onChange={onChange}
            />
            </Col>
        </Row>

       </Modal>
    )
}

export default UpdateEmployeeModal
