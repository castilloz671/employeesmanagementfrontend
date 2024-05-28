import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, createEmployee, updateEmployee } from '../services/employeeService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    lastName: '',
    phone: '',
    address: '',
    position: '',
    office: '',
    salary: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const loadEmployee = async () => {
      if (id) {
        const response = await getEmployee(id);
        setEmployee(response.data);
      }
    };

    loadEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateEmployee(id, employee);
    } else {
      await createEmployee(employee);
    }
    navigate('/');
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">{id ? 'Edit Employee' : 'Add Employee'}</h2>
          <Button onClick={() => navigate('/')} variant="secondary" className="mb-3">Back</Button>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={employee.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={employee.position}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Office</Form.Label>
              <Form.Control
                type="text"
                name="office"
                value={employee.office}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">{id ? 'Update' : 'Save'}</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeForm;
