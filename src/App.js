import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppBarNav from './components/app_bar_nav';
import HomeScreen from './screens/home_screen';
import AboutScreen from './screens/about_screen';
import WorkshopsScreen from './screens/workshops_screen';

class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <AppBarNav />
          <Route
            pattern="/"
            render={props => {
              window.scrollTo(0, 0);
              return null;
            }}
          />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/workshops" component={WorkshopsScreen} />
          {/*
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
