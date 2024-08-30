import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apiAuth } from '../api/auth';

// Styled Components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  margin: 40px auto;
`;

const LoginContainer = styled(Container)`
  margin-top: 40px;
`;
const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
`;

const Error = styled.p`
  color: red;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LinksContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiAuth.loginWithOauth(username, password)
      console.log(response)
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('username', username)
      navigate('/'); // Redirect to dashboard or another protected route
    } catch (err) {
      setError('Invalid username or password'); //?
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Username:</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        {error && <Error>{error}</Error>}
        <Button type="submit">Login</Button>
      </Form>
      <LinksContainer>
        <Link href="/create-user">Create User</Link>
        <Link href="/forgot-password">Forgot Password?</Link>
      </LinksContainer>
    </LoginContainer>
  );
};

export default Login;
