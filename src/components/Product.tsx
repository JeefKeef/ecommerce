import * as React from 'react';
import styled from 'styled-components';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';

type ProductItemProps = {
  item: {
    id: number;
    img: string;
  };
  key: number;
};

const Info = styled.div`
  opacity: 0;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.5s ease;
  width: 100%;
  z-index: 3;
`;

const Container = styled.div`
  align-items: center;
  background-color: #f5fbfd;
  cursor: pointer;
  display: flex;
  flex: 1;
  height: 350px;
  justify-content: center;
  margin: 1rem;
  min-width: 300px;
  position: relative;
  transition: all 0.5s ease;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  background-color: red;
  border-radius: 50%;
  height: 200px;
  position: absolute;
  width: 200px;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 1rem;
  transition: all 0.5s ease;
  width: 40px;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }: ProductItemProps) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="product image" />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
