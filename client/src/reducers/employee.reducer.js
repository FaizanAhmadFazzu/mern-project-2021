import { employeeConstants } from "../actions/constants";

const initState = {
  employees: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case employeeConstants.GET_ALL_EMPLOYEES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case employeeConstants.GET_ALL_EMPLOYEES_SUCCESS:
      state = {
        ...state,
        loading: false,
        employees: action.payload.employees,
      };
      break;
    case employeeConstants.GET_ALL_EMPLOYEES_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case employeeConstants.ADD_EMPLOYEE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case employeeConstants.ADD_EMPLOYEE_SUCCESS:
      state = {
        ...state,
        loading: false,
        employees: [...state.employees, action.payload.employee],
      };
      break;
    case employeeConstants.ADD_EMPLOYEE_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    case employeeConstants.UPDATE_EMPLOYEE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case employeeConstants.UPDATE_EMPLOYEE_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case employeeConstants.UPDATE_EMPLOYEE_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    case employeeConstants.DELETE_EMPLOYEE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case employeeConstants.DELETE_EMPLOYEE_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case employeeConstants.DELETE_EMPLOYEE_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    default:
      break;
  }
  return state;
};
