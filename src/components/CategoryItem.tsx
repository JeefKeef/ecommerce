import * as React from 'react';
import styled from 'styled-components';

type CategoryItemProps = {
  item: {
    id: number;
    img: string;
    title: string;
  };
  key: number;
};

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 1rem;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: bold;
  padding: 1rem;
`;

const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
