import React from 'react';
import styled from 'styled-components';

import heroImage from '../images/heroImage.jpg';
import Signup from '../components/signup.js';

const HomeScreen = () => {
  return (
    <div>
      <Hero>
        <Title>JADE & ANTLER</Title>
      </Hero>
      <Signup />
    </div>
  );
};

export default HomeScreen;

const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #222;
  height: 100vh;
  color: white;

  background-image: url(${heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 1.5em;
`;
