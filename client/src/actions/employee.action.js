import { bindActionCreators } from "redux";
import axios from "../helpers/axios";
import { employeeConstants } from "./constants"

export const getEmployees = () => {
    return async dispatch => {
        dispatch({ type: employeeConstants.GET_ALL_EMPLOYEES_REQUEST });
        const res = await axios.get('/employees')
        if(res.status == 200) {
            const { employees } = res.data;
            dispatch({ 
                type: employeeConstants.GET_ALL_EMPLOYEES_SUCCESS,
                payload: { employees }
             })
        } else {
            const { error } = res.data;
            dispatch({
                type: employeeConstants.GET_ALL_EMPLOYEES_FAILURE,
                payload: { error } 
            })
        }
    }
}

export const addEmployee = employeeDetails => {
    return async dispatch => {
        dispatch({ type: employeeConstants.ADD_EMPLOYEE_REQUEST });
        const res = await axios.post('/employees/create', employeeDetails)
        if(res.status == 201) {
            const { employee } = res.data;
            dispatch({ 
                type: employeeConstants.ADD_EMPLOYEE_SUCCESS,
                payload: { employee }
             })
        } else {
            const { error } = res.data;
            dispatch({
                type: employeeConstants.ADD_EMPLOYEE_FAILURE,
                payload: { error } 
            })
        }
    }
}

export const updateEmployee = (employee) => {
    return async dispatch => {
        dispatch({ type: employeeConstants.UPDATE_EMPLOYEE_REQUEST });
        const res = await axios.post('/employees/update', employee);
        if (res.status == 200){
            dispatch({ 
                type: employeeConstants.UPDATE_EMPLOYEE_SUCCESS,
             })
             dispatch(getEmployees())
        } else {
            const { error } = res.data;
            dispatch({
                type: employeeConstants.UPDATE_EMPLOYEE_FAILURE,
                payload: { error }
            })
        }
    }
}

export const deleteEmployee = (_id) => {
    return async dispatch => {
        dispatch({ type: employeeConstants.DELETE_EMPLOYEE_REQUEST });
        const res = await axios.post('/employees/delete', {_id});
        if (res.status == 200){
            dispatch({ 
                type: employeeConstants.DELETE_EMPLOYEE_SUCCESS,
             })
             dispatch(getEmployees())
        } else {
            const { error } = res.data;
            dispatch({
                type: employeeConstants.DELETE_EMPLOYEE_FAILURE,
                payload: { error }
            })
        }
    }
}