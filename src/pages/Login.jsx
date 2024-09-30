import React, { useState } from "react";
import './Login.css'; 
import { useNavigate } from "react-router";
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import Swal from 'sweetalert2';


export default function Login({ onLogin }) { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handlerName = (e) => {
    setName(e.target.value);
  };

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (hasErrors(name, email, password)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid input',
        text: 'Please correct the errors before submitting!',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome, ${name}`,
      });
      onLogin(name); 
      navigate("/"); 
    }
  };

  const hasErrors = (name, email, password) => {
    const errors = {};
    if (name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    if (!email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
      errors.email = "Invalid email";
    }
    if (password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      errors.password = "Password must be at least 8 characters and contain both uppercase and lowercase letters";
    }
    setError(errors);
    return Object.keys(errors).length > 0;
  };

  return (
    <Container className="py-5 my-5 bg">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form onSubmit={submitHandler} noValidate>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label className="data">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handlerName}
                isInvalid={!!error.name}
              />
              <Form.Control.Feedback type="invalid">
                {error.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className="data">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handlerEmail}
                isInvalid={!!error.email}
              />
              <Form.Control.Feedback type="invalid">
                {error.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label className="data">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlerPassword}
                isInvalid={!!error.password}
              />
              <Form.Control.Feedback type="invalid">
                {error.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button  className="btn-purple" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
