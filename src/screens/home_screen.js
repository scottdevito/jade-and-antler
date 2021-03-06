import React, { Component } from 'react';
import styled from 'styled-components';

import homeHeroImage from '../images/heros/homeHeroImage.jpg';
import Signup from '../components/signup/signup.js';
import InstagramFeed from '../components/instagram/instagram_feed';
import Footer from '../components/footer';

class HomeScreen extends Component {
  componentDidMount() {
    if (this.props.workshops.length === 0) {
      this.props.getWorkshops();
    }
  }

  render() {
    let { submitEmailToMailingList, emailSubmitted } = this.props;
    return (
      <div>
        <Hero>
          <Title>JADE&ANTLER</Title>
        </Hero>
        <StyledScreenWrapper>
          <StyledMissionStatementBanner>
            COMMUNITY • YOGA • EMPOWERMENT
          </StyledMissionStatementBanner>
          <InstagramFeed />
          <Signup
            submitEmailToMailingList={submitEmailToMailingList}
            emailSubmitted={emailSubmitted}
          />
        </StyledScreenWrapper>
        <Footer />
      </div>
    );
  }
}

export default HomeScreen;

const StyledScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #222;
  height: 100vh;
  color: white;

  background-image: url(${homeHeroImage});
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

const StyledMissionStatementBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.75em;
  height: 4em;
  width: 100%;
  margin-top: 5em;

  @media (max-width: 767px) {
    font-size: 1em;
    height: 4em;
    margin-top: 7em;
  }
`;
