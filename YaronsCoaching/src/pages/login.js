// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimBackground from '../components/AnimBackground';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
background: linear-gradient(#000000a1, #00000000);
color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
border-radius: 14px;
color: rgba(255, 255, 255, 0.696);
width: 100% !important;
padding: 10px 5px;
background: none;
margin-bottom: 10px;
border: none;
box-shadow: 0 0 40px 2px #7ad0fe41;
font-size: 1rem !important;
`;

const Button = styled.button`
background: #3498db;
display: inline-grid;
  color: black !important;
  background-color: white;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  height: 10%;
  align-content: center;

  &:hover {
    color: white !important;
    background: transparent !important;
    border: 1px solid white;
    transform: translateY(-5px);
  }
`;

const BackLink = styled(Link)`
  color: #3498db;
  text-decoration: none;
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
`;

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);


      if (response.ok) {
        console.log('Inloggen succesvol');
      } else {
        const data = await response.json();
        console.error('Inloggen mislukt:', data.message);
      }
    } catch (error) {
      console.error('Fout tijdens inloggen:', error);
    }
  };

  return (
    <FormContainer>
      <AnimBackground />
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Label htmlFor="email">E-mail:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="password">Wachtwoord:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button type="submit">Login</Button>

        <BackLink to="/">Go terug</BackLink>
      </Form>
    </FormContainer>
  );
}

export default Login;
