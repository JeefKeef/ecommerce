import { Send } from '@material-ui/icons';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  height: 40px;
  justify-content: space-between;
  width: 50%;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 2rem;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  flex: 1;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
