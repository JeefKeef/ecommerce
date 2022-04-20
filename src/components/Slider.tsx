import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import * as React from 'react';
import styled from 'styled-components';

import { mobile } from '../responsive';
import { sliderItems } from '../data';

type ArrowProps = {
  direction: string;
};

type SlideBackgroundProps = {
  bg: string;
};

type WrapperProps = {
  slideIndex: number;
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  ${mobile({ display: 'none' })}
`;
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div<SlideBackgroundProps>`
  align-items: center;
  background-color: ${props => props.bg};
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.07em;
  margin: 1rem 0;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  padding: 1rem;
`;

const Arrow = styled.div<ArrowProps>`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  left: ${props => props.direction === 'left' && '1rem'};
  margin: auto;
  opacity: 0.5;
  position: absolute;
  right: ${props => props.direction === 'right' && '1rem'};
  top: 0;
  width: 50px;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems?.map(item => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} alt="slide image" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
