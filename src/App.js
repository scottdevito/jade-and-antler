import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import AppBarNav from './components/app_bar_nav';
import HomeScreen from './screens/home_screen';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <AppBarNav />
        <HomeScreen />
      </StyledApp>
    );
  }
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
