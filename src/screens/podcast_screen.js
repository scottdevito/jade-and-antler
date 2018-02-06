import React, { Component } from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';

class PodcastScreen extends Component {
  componentDidMount() {
    this.props.getPodcastEpisodes();
  }

  renderPodcastEpisodes = () => {
    // Map over array of podcast episodes and render
    return (this.props.podcastEpisodes || []).map(episode => {
      return (
        <StyledPodcastEpisode key={episode.url}>
          <StyledPodcastTitle>{`${episode.title}`}</StyledPodcastTitle>
          <StyledIframe
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${
              episode.url
            }&amp;color=%235e4f45&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true`}
          />
        </StyledPodcastEpisode>
      );
    });
  };

  render() {
    return (
      <div>
        <StyledScreenWrapper>
          {this.renderPodcastEpisodes()}
        </StyledScreenWrapper>
        <Footer />
      </div>
    );
  }
}

export default PodcastScreen;

const StyledScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4em;
  margin-top: 3.5em;
`;

const StyledPodcastEpisode = styled.div`
  margin: 4em;
`;

const StyledIframe = styled.iframe`
  width: 40em;
  border: none;

  @media (max-width: 767px) {
    width: 20em;
  }
`;

const StyledPodcastTitle = styled.h3`
  @media (max-width: 767px) {
    text-align: center;
  }
`;
