import React from 'react';
import styled from 'styled-components';

import heroImage from '../images/heroImage.jpg';

const HomeScreen = () => {
  return (
    <div>
      <Hero>
        <Title>JADE & ANTLER</Title>
      </Hero>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default HomeScreen;

const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #222;
  height: 86vh;
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
