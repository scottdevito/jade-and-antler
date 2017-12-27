import React from 'react';
import styled from 'styled-components';

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
  background-color: #222;
  padding: 8em;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;
