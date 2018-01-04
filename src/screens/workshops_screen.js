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
  render() {
    return (
      <div>
        <StyledScreenWrapper>
          <StyledJanHeader>January 2018</StyledJanHeader>
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="January 14, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="January 17, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <StyledFebHeader>Febrary 2018</StyledFebHeader>
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="February 03, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="February 14, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="February 29, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <StyledMarHeader>March 2018</StyledMarHeader>
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="March 11, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="March 16, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <StyledAprHeader>April 2018</StyledAprHeader>
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="April 07, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="April 13, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="April 19, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <StyledMayHeader>May 2018</StyledMayHeader>
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="May 01, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="May 22, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
          <WorkshopCard
            name="Yoga and Meditation Workshop"
            date="May 25, 2018"
            description="Join us for a 2 hour session of Vinyassa yoga and mediation on a Sunday afternoon. This is a long card for length."
          />
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

const StyledJanHeader = StyledMonthHeader.extend`
  background-image: url('${JanImg}');
`;

const StyledFebHeader = StyledMonthHeader.extend`
  background-image: url('${FebImg}');
`;

const StyledMarHeader = StyledMonthHeader.extend`
  background-image: url('${MarImg}');
`;

const StyledAprHeader = StyledMonthHeader.extend`
  background-image: url('${AprImg}');
`;

const StyledMayHeader = StyledMonthHeader.extend`
  background-image: url('${MayImg}');
`;
