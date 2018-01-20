import React, { Component } from 'react';
import styled from 'styled-components';
import Instafeed from 'react-instafeed';
import '../../styles/ig_responsive_images.css';

import { userId, clientId, accessToken } from './insta_config';

const igFeedTemplate =
  '<a href="{{link}}" target="_blank" class="instafeed__item">' +
  '<img class="instafeed__item__background ig-img-responsive" src="{{image}}" />' +
  '</div>' +
  '</a>';

class InstagramFeed extends Component {
  // To fix bug in react-instafeed where instafeed continues to render feed multiple times on re-render
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <StyledGridListContainer>
        <Instafeed
          limit="6"
          ref="instafeed"
          resolution="low_resolution"
          sortBy="most-recent"
          template={igFeedTemplate}
          userId={userId}
          clientId={clientId}
          accessToken={accessToken}
        />
        <StyledInstafeed id="instafeed" />
      </StyledGridListContainer>
    );
  }
}

export default InstagramFeed;

const StyledGridListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75vw;
  /* height: 250 */
  margin-top: 10em;
  margin-bottom: 16em;
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: 767px) {
    margin-top: 6em;
    margin-bottom: 12em;
  }
`;

const StyledInstafeed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
