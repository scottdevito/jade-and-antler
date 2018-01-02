import React, { Component } from 'react';
import styled from 'styled-components';

import WorkshopCard from '../components/workshops/workshop_card';
import Footer from '../components/footer';

class WorkshopsScreen extends Component {
  render() {
    return (
      <div>
        <StyledScreenWrapper>
          <StyledMonthHeader>January 2018</StyledMonthHeader>
          <WorkshopCard />
          <WorkshopCard />
          <WorkshopCard />
          <WorkshopCard />
          <StyledMonthHeader>Febrary 2018</StyledMonthHeader>
          <WorkshopCard />
          <WorkshopCard />
        </StyledScreenWrapper>
        <Footer />
      </div>
    );
  }
}

export default WorkshopsScreen;

const StyledScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 2em;

  /* AppBarNav offset */
  margin-top: 3.5em;
`;

const StyledMonthHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #b29e93;
  font-weight: bold;
  font-size: 1.75em;
  height: 4em;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;

  @media (max-width: 767px) {
    font-size: 1.5em;
    height: 5em;
  }
`;
