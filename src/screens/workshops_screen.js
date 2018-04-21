import React, { Component } from 'react';
import styled from 'styled-components';

import WorkshopCard from '../components/workshops/workshop_card';
import Footer from '../components/footer';

import JanImg from '../images/workshopHeaders/jan.jpg';
import FebImg from '../images/workshopHeaders/feb.jpg';
import MarImg from '../images/workshopHeaders/mar.jpg';
import AprImg from '../images/workshopHeaders/apr.jpg';
import MayImg from '../images/workshopHeaders/may.jpg';

class WorkshopsScreen extends Component {
  componentDidMount() {
    if (this.props.workshops.length === 0) {
      this.props.getWorkshops();
    }
  }

  renderWorkshopsWithHeaders = Workshops => {
    let currentMonth = 'none';

    return Workshops.map(event => {
      let currentEventMonthAbbrev = event.month.slice(0, 3);

      if (currentMonth !== currentEventMonthAbbrev) {
        currentMonth = currentEventMonthAbbrev;
        return this.renderMonthHeader(event, currentEventMonthAbbrev);
      }

      return <WorkshopCard key={event.eventId} event={event} />;
    });
  };

  renderMonthHeader = (event, currentEventMonthAbbrev) => {
    let monthHeaderImg = this.monthImageToRender(currentEventMonthAbbrev);

    return (
      <StyledMonthHeaderWrapper key={event.eventId}>
        <StyledMonthHeader monthImage={`${monthHeaderImg}`}>
          {event.month} {` ${event.year}`}
        </StyledMonthHeader>
        <WorkshopCard event={event} />
      </StyledMonthHeaderWrapper>
    );
  };

  monthImageToRender = currentEventMonthAbbrev => {
    switch (currentEventMonthAbbrev) {
      case 'Jan':
        return JanImg;
      case 'Feb':
        return FebImg;
      case 'Mar':
        return MarImg;
      case 'Apr':
        return AprImg;
      case 'May':
        return MayImg;
      // case 'Jun':
      // return JunImg;
      // case 'Jul':
      // return JulImg;
      // case 'Aug':
      // return AugImg;
      // case 'Sep':
      // return SepImg;
      // case 'Oct':
      // return OctImg;
      // case 'Nov':
      // return NovImg;
      // case 'Dec':
      // return DecImg;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <StyledScreenWrapper>
          {this.props.workshops.length > 0 ? (
            this.renderWorkshopsWithHeaders(this.props.workshops)
          ) : (
            <NoWorkshopsSection>
              <h1>No upcoming workshops at this time</h1>
              <StyledSubtleText>Please check back soon!</StyledSubtleText>
            </NoWorkshopsSection>
          )}
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

  background-image: url('${props => props.monthImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  font-weight: bold;
  font-size: 1.75em;
  height: 4em;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 1.5em;
    height: 5em;
  }
`;

const StyledMonthHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSubtleText = styled.p`
  color: #5f5e5e;
  margin: 0.75em;
  text-align: center;
`;

const NoWorkshopsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
`;
