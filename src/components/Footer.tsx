import * as React from 'react';
import styled from 'styled-components';

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import { mobile } from '../responsive';

type SocialIconProps = {
  color: string;
};

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 2rem;
  ${mobile({ display: 'none' })}
`;

const Right = styled.div`
  flex: 1;
  padding: 2rem;
  ${mobile({ backgroundColor: '#eee' })}
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 2rem 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.h1<SocialIconProps>`
  align-items: center;
  background-color: #${props => props.color};
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 2rem;
  width: 40px;
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  width: 50%;
`;

const ContactItem = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ecommerce</Logo>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          tenetur esse assumenda! Dolorum soluta exercitationem dicta sint nam
          dolores quae ullam animi nulla consequatur, fugit impedit ipsa quod?
          Vel, quod!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          4852 Elliot Avenue
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          206-501-4838
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          Washington@fakeemail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
