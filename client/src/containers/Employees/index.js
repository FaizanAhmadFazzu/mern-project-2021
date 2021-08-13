import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import "./style.css";
import { IoIosAddCircleOutline, IoMdRemoveCircleOutline, IoIosTrash, IoMdCreate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import AddNewEmployeeModal from "./components/AddNewEmployeeModal";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../../actions";
import UpdateEmployeeModal from "./components/UpdateEmployeeModal";
import DeleteEmployeeModal from "./components/DeleteEmployeeModal";

const Employees = () => {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showUpdateEmployeeModal, setShowUpdateEmployeeModal] = useState(false);
  const [showDeleteEmployeesModal, setShowDeleteEmployeesModal] = useState(false);
  const initialEmployeeState = {
    name: "",
    email: "",
    address: "",
    phone: "",
  };
  const [employeeDetails, setEmployeeDetails] = useState(initialEmployeeState);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState('');
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);




    useEffect(() => {
        dispatch(getEmployees());
    }, []);

   
    useEffect(() => {
      if(!employee.loading) {
        setEmployeeDetails(initialEmployeeState);
        setShowAddEmployeeModal(false);
        setShowUpdateEmployeeModal(false);
        setShowDeleteEmployeesModal(false);
      }
    }, [employee.loading])
    

  const employeeDataChange = (event) => {
    const { name, value } = event.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const submitEmployeeDetails = () => {
    dispatch(addEmployee(employeeDetails));
  };

  const editEmployeeModal = (employee) => {
    setEmployeeDetails(employee);
    setShowUpdateEmployeeModal(true)
  }

  const deleteEmployeeModal = (employeeId) => {
    setDeleteEmployeeId(employeeId);
    setShowDeleteEmployeesModal(true);
  }

  const deleteEmployeeForm = () => {
    dispatch(deleteEmployee(deleteEmployeeId));
  }

  const updateEmployeeForm = () => {
    dispatch(updateEmployee(employeeDetails));
  }

  return (
    <Container>
      <div className="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <Row>
              <Col sm={6}>
                <h2>
                  Manage <b>Employees</b>
                </h2>
              </Col>
              <Col sm={6}>
                <button
                  className="btn btn-success"
                  onClick={() => setShowAddEmployeeModal(true)}
                >
                  <IoIosAddCircleOutline className="icon" />{" "}
                  <span>Add New Employee</span>{" "}
                </button>

                {/* <button
                  className="btn btn-danger"
                  onClick={() => setShowDeleteEmployeesModal(true)}
                >
                  <IoMdRemoveCircleOutline className="icon" />
                  <span>Delete</span>
                </button> */}
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
              {employee.employees && employee.employees.length > 0
                ? employee.employees.map((employee, index) => (
                    <tr key={index}>
                         <td>{index}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.address}</td>
                      <td>{employee.phone}</td>
                      <td>
                      <button
                        onClick={() => editEmployeeModal(employee)} className="edit"
                      >
                        <IoMdCreate className="icon" />
                      </button>
                      <button
                        onClick={() => deleteEmployeeModal(employee._id)} className="delete"
                      >
                        <IoIosTrash className="icon" />
                      </button>
                      </td>
                    </tr>
                  ))
                : <p>No Employees...</p>}
            </tbody>
          </Table>
        </div>
      </div>
      <AddNewEmployeeModal
        show={showAddEmployeeModal}
        handleClose={() => setShowAddEmployeeModal(false)}
        modalTitle={"Add Employee"}
        employee={employeeDetails}
        onChange={employeeDataChange}
        onSubmit={submitEmployeeDetails}
      />
      <UpdateEmployeeModal 
      show={showUpdateEmployeeModal}
      handleClose={() => setShowUpdateEmployeeModal(false)}
      modalTitle={'Edit Employee'}
      employee={employeeDetails}
      onChange={employeeDataChange}
      onSubmit={updateEmployeeForm}
      />

      <DeleteEmployeeModal 
      show={showDeleteEmployeesModal}
      handleClose={() => setShowDeleteEmployeesModal(false)}
      modalTitle={'Delete Employee'}
      onSubmit={deleteEmployeeForm}
      />
    </Container>
  );
};

export default Employees;
