import React from 'react';
import styled from 'styled-components';

import JAALogo from '../images/logo/JALogo.png';
import fbIcon from '../images/icons/fbIcon.svg';
import igIcon from '../images/icons/igIcon.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledJAALogo />

      <StyledNavAndSocial>
        <StyledNavItem>
          <StyledSocialIcon src={fbIcon} alt="facebook icon" />
        </StyledNavItem>
        <StyledNavItem>
          <a
            href="https://www.instagram.com/jadeandantler/"
            data-content="https://instagram.com/jadeandantler"
            data-type="external"
          >
            <StyledSocialIcon src={igIcon} alt="instagram icon" />
          </a>
        </StyledNavItem>
      </StyledNavAndSocial>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 6em;
  width: 100%;
  background-color: #7b675a;
  color: #ffffff;

  @media (max-width: 767px) {
    height: 10em;
  }
`;

const StyledJAALogo = styled.div`
  height: 4em;
  width: 4em;
  background-image: url(${JAALogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledNavAndSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledNavItem = styled.div`
  margin-left: 1em;
  margin-right: 1em;

  @media (max-width: 767px) {
    margin-top: 1em;
  }
`;

const StyledSocialIcon = styled.img`
  height: 2em;
  width: 2em;
`;
