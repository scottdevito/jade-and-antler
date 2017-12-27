import React from 'react';
import styled from 'styled-components';

import heroImage from '../images/heroImage.jpg';
import Signup from '../components/signup.js';
import InstagramFeed from '../components/instagram_feed';

const HomeScreen = () => {
  return (
    <div>
      <Hero>
        <Title>JADE & ANTLER</Title>
      </Hero>
      <InstagramFeed />
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
  margin-left: 0.25em;
  margin-bottom: 0.5em;

  @media (max-width: 425px) {
    margin-bottom: 1.5em;
    @media (min-height: 710px) {
      margin-bottom: 3.25em;
    }
  }
`;
