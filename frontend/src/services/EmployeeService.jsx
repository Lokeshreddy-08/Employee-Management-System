import axios from "axios";

const REST_API_BASE_URL= 'http://localhost:8080/api/employees/';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL + "getAll");
}

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL+ "create",employee);

export const deleteEmployee = (id) => axios.delete(REST_API_BASE_URL + "delete/"+id);

const SIGNUP_URL='http://localhost:8080/api/users/'
export const signUp = (emp) => axios.post(SIGNUP_URL+'signup',emp);

export const checkCredentials = (Credentials) => axios.post(SIGNUP_URL + 'login', Credentials);

export const getUserDetails = (email) => axios.post(SIGNUP_URL,email);