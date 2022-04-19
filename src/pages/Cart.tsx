import * as React from 'react';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

type TopButtonProps = {
  btn?: string;
};

type ProductColorProps = {
  color: string;
};

type SummaryItemProps = {
  priceType?: string;
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

const TopButton = styled.button<TopButtonProps>`
  background-color: ${props =>
    props.btn === 'filled' ? 'black' : 'transparent'};
  border: ${props => props.btn === 'filled' && 'none'};
  color: ${props => props.btn === 'filled' && 'white'};
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  cursor: pointer;
  margin: 0 0.5rem;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  border-radius: 10px;
  border: 0.5px solid lightgray;
  flex: 1;
  height: 50vh;
  padding: 1.5rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div<ProductColorProps>`
  background-color: ${props => props.color};
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  align-items: center;
  display: flex;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 0.3rem;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: bold;
`;

const SummaryItem = styled.div<SummaryItemProps>`
  display: flex;
  font-size: ${props => props.priceType === 'total' && '24px'};
  font-weight: ${props => props.priceType === 'total' && '500'};
  justify-content: space-between;
  margin: 2.5rem 0;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  background-color: teal;
  color: white;
  font-weight: 600;
  padding: 0.5rem;
  width: 100%;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton btn="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Du ma
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>123456789x
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 10
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem priceType="total">
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
