import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import AppBarNav from './components/app_bar_nav';
import HomeScreen from './screens/home_screen';

class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <AppBarNav />
          <Route exact path="/" component={HomeScreen} />
          {/* <Route path="/about" component={AboutScreen}/>
      <Route path="/workshops" component={WorkshopsScreen}/>
      <Route path="/blog" component={BlogScreen}/> */}
        </StyledApp>
      </Router>
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
