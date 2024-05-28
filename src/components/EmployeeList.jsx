import React, { useEffect, useState } from 'react';
import { deleteEmployee, getEmployees } from '../services/employeeService';
import { Link } from 'react-router-dom';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2 className="text-center">Employee List</h2>
          <Link to="/employees/new" className="btn btn-primary mb-3">Add Employee</Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>LastName</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Position</th>
                <th>Office</th>
                <th>Salary</th>
                <th>AFP</th>
                <th>ARS</th>
                <th>Net Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.employeeId}>
                  <td>{employee.name}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.address}</td>
                  <td>{employee.position}</td>
                  <td>{employee.office}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.afp}</td>
                  <td>{employee.ars}</td>
                  <td>{employee.salaryNeto}</td>
                  <td>
                    <Link to={`/employees/edit/${employee.employeeId}`} className="btn btn-info mr-2">Edit</Link>
                    <Button onClick={() => handleDelete(employee.employeeId)} variant="danger ml-2">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeList;
