import React from 'react';
import styled from 'styled-components';

import aboutJeanineImage from '../images/about/aboutJeanine.jpg';
import aboutJessicaImage from '../images/about/aboutJessica.jpg';

const About = () => {
  return (
    <StyledScreenWrapper>
      <StyledAboutUsWrapper>
        <AboutUsHeader>ABOUT US</AboutUsHeader>
        <p>
          Your vibe attracts your tribe. A huge part of what we believe at J&A
          is that it's important to be around people who lift you up, who
          support your vision, who can see things that maybe you can't and then
          share those things with you. We believe that friendship and
          collaboration go hand in hand and that you vibrate higher when you are
          surrounded by L O V E. This is the exact way that JADE&ANTLER came to
          be. Two friends with a shared vision, lots of inspiration,
          encouragement and support for one another.
        </p>
      </StyledAboutUsWrapper>

      <StyledAboutHeader>JEANINE</StyledAboutHeader>
      <StyledAboutWrapper>
        <StyledAboutImage src={aboutJeanineImage} alt="Jeanine" />
        <p>
          Jeanine Talento, E-RYT, is a New York native currently living in
          Oceanside, California. Jeanine was introduced to the healing benefits
          of Yoga in 2006 & decided to become a teacher in 2013. She studied
          with Sadhana Yoga School in Savusavu, Fiji for her 200hr teacher
          training where she fell in love with both traveling and teaching. Now,
          5 years later, Jeanine is a facilitator with Sadhana Yoga School and
          assists on 200hr teacher trainings internationally. She is currently
          working on her 500hr advanced teacher training at Prana Yoga Center in
          La Jolla, CA. Jeanine is a Certified Integrative Life Coach and hopes
          to create a safe space for her students to heal and transform their
          inner worlds. Additionally, Jeanine holds her Bachelor of Arts from
          CUNY Queens College and is in the process of applying to Graduate
          school for Mental Health Counseling. Jeanine is thrilled to
          collaborate creatively with Jessica in spirit and energy to bring
          uplifting, empowering and transformative programs to their communities
          through Jade&Antler.
        </p>
      </StyledAboutWrapper>

      <StyledAboutHeader>JESSICA</StyledAboutHeader>
      <StyledAboutReverseWrapper>
        <p>
          Jessica Jean is an intuitive body worker who believes in personal
          empowerment through holistic embodiment practices. Jessica has been
          practicing yoga for over 10 years and after completing a BA in
          communications at Pace University, Jessica participated in her first
          200 hour vinyasa style teacher training in 2014 at Three Sisters Yoga
          in NYC. Since then, Jessica has fallen head over heels for teaching
          others how to feel strong and centered in their bodies, minds and
          hearts. Jessica is a 750 hour Licensed Massage Therapist with special
          training in Trauma informed yoga through the prison yoga project,
          trauma touch therapy and reiki levels I and II. Jessica will complete
          her Hot Yoga training December of this year and will begin completing
          hours towards her 500 hour RYT certification in early 2018. Jessica
          also participates in weekly women's circles, where she has developed a
          passion for the curation of intentional community as a tool for
          personal growth. Jessica hopes that Jade&Antler will serve as a source
          of inspiration and an outlet for creativity as well as a place where
          loving, authentic,community lifts up everyone who crosses J&A's path
          in ecstatic, fiery love. Jessica currently lives with her pup Lucy in
          Denver, Colorado.
        </p>
        <StyledAboutImage src={aboutJessicaImage} alt="Jessica" />
      </StyledAboutReverseWrapper>
    </StyledScreenWrapper>
  );
};

export default About;

const StyledScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledAboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  text-align: center;
  font-size: 1.25rem;

  @media (max-width: 1023px) {
    width: 90vw;
  }
`;

const StyledAboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.15em solid #d7ab5c;
  font-size: 1.75em;
  margin-top: 2em;
`;
const AboutUsHeader = StyledAboutHeader.extend`
  font-size: 2.5rem;
`;

const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  text-align: center;
  font-size: 1.25rem;
  overflow: hidden;

  
  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    }
  }
`;

const StyledAboutReverseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  text-align: center;
  font-size: 1.25rem;
  overflow: hidden;

  
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 90vw;
    }
  }
`;

const StyledAboutImage = styled.img`
  width: 23vw;
  margin: 1.5em;

  @media (max-width: 767px) {
    width: 70vw;
    }
  }
`;
