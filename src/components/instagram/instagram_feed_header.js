import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';

import jaaLogo from '../../images/logo/jaaLogo.png';

class InstagramFeedHeader extends Component {
  render() {
    return (
      <StyledInstagramFeedHeader>
        <StyledLogo />
        <StyledHeaderRight>
          <StyledIGName>
            jadeandantler
            <Button raised color="primary">
              Follow
            </Button>
          </StyledIGName>
          <StyledIGStats>
            <StyledStat>13 posts</StyledStat>
            <StyledStat>465 followers</StyledStat>
            <StyledStat>1,408 following</StyledStat>
          </StyledIGStats>
        </StyledHeaderRight>
      </StyledInstagramFeedHeader>
    );
  }
}

export default InstagramFeedHeader;

const StyledInstagramFeedHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: space-around;
  margin-bottom: 1em;
`;

const StyledLogo = styled.div`
  height: 5em;
  width: 5em;
  margin-bottom: 2em;
  background-image: url(${jaaLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledHeaderRight = styled.div`
  margin-left: 1em;
`;

const StyledIGName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.25em;
  margin-bottom: 0.5em;
`;

const StyledIGStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const StyledStat = styled.div`
  margin-right: 1em;
`;
