import * as React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 1.5rem;
  width: 25%;
  ${mobile({ width: '80%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 0.5rem 0;
  min-width: 40%;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 1rem 1.5rem;
  width: 40%;
`;

const Link = styled.a`
  cursor: pointer;
  font-size: 12px;
  margin: 0.3rem 0;
  text-decoration: underline;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
