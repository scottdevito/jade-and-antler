import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppBarNav from './components/app_bar_nav';
import HomeScreenContainer from './containers/home_screen.C';
import AboutScreen from './screens/about_screen';
import WorkshopsScreenContainer from './containers/workshops_screen.C';
import PodcastScreenContainer from './containers/podcast_screen.C';

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
          <Route exact path="/" component={HomeScreenContainer} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/workshops" component={WorkshopsScreenContainer} />
          <Route path="/podcast" component={PodcastScreenContainer} />
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
