import axios from 'axios';

const API_URL = 'https://localhost:44393/api/Employees';

export const getEmployees = async () => {
  return await axios.get(API_URL);
};

export const getEmployee = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createEmployee = async (employee) => {
  return await axios.post(API_URL, employee);
};

export const updateEmployee = async (id, employee) => {
  return await axios.put(`${API_URL}/${id}`, employee);
};

export const deleteEmployee = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};