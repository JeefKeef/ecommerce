import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 2rem;
  width: 40%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  margin: 1.5rem 0.5rem 0 0;
  min-width: 40%;
  padding: 0.5rem;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  padding: 1rem 1.5rem;
  width: 40%;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
