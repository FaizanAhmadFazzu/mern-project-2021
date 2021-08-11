import React, { useState } from 'react';
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import './style.css';
import { IoIosAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import AddNewEmployeeModal from './components/AddNewEmployeeModal'

const Employees = () => {
    const [showAddEmployeeModal, setShowAddEmployeeModa] = useState(false);

    const addEmployee = () => {
        console.log("submit employee")
    }

    return (
        <Container>
            <div className="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <Row>
                            <Col sm={6}>
                                <h2>Manage <b>Employees</b></h2>
                            </Col>
                            <Col sm={6}>
                                <button  className="btn btn-success" onClick={() => setShowAddEmployeeModa(true)}>
                                <IoIosAddCircleOutline className="icon" /> <span>Add New Employee</span>  </button>
                               
                                <button className="btn btn-danger" onClick={() => setShowAddEmployeeModa(true)}>
                                <IoMdRemoveCircleOutline className="icon" /><span>Delete</span>  
                                </button>
                            </Col>
                        </Row>
                    </div>

                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <AddNewEmployeeModal
                show={showAddEmployeeModal} 
                hanldeClose={() => setShowAddEmployeeModa(false)}
                modalTitle={'Add Employee'}
                onSubmit={addEmployee}
             />
        </Container>
    )
}

export default Employees
