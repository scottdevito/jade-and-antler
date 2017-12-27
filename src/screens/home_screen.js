import React from 'react';
import styled from 'styled-components';

const HomeScreen = () => {
  return (
    <div>
      <Header>
        <Title>JADE & ANTLER</Title>
      </Header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default HomeScreen;

const Header = styled.header`
  background-color: #222;
  padding: 4em;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;
