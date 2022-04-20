import { Add, Remove } from '@material-ui/icons';
import * as React from 'react';
import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

type FilterColorProps = {
  color: string;
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
  ${mobile({ padding: '.5rem', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 0 2rem;
`;

const Image = styled.img`
  height: 90vh;
  object-fit: cover;
  width: 100%;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 4.5rem;
  ${mobile({ padding: '.5rem' })}
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Description = styled.p`
  padding: 2rem 0;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  width: 50%;
  ${mobile({width:'100%'})}
`;

const Filter = styled.div`
  align-items: center;
  display: flex;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const FilterColor = styled.div<FilterColorProps>`
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  margin: 0 0.5rem;
  width: 20px;
`;

const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile({width:'100%'})}
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
`;

const Amount = styled.span`
  align-items: center;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0 0.5rem;
  width: 30px;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid teal;
  cursor: pointer;
  font-weight: bold;
  padding: 1rem;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            doloremque laudantium! Perferendis molestiae est, accusamus facilis
            beatae unde nemo molestias animi sed aliquid nihil nam incidunt
            eaque quas culpa delectus.
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
