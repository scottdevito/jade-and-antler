import React from 'react';
import styled from 'styled-components';
import { GridList, GridListTile } from 'material-ui/GridList';
import { tileData } from '../../images/mockIgPics/tileData';

import InstagramFeedHeader from './instagram_feed_header';

function InstagramFeed(props) {
  return (
    <StyledGridListContainer>
      {/* <InstagramFeedHeader /> */}
      <StyledGridList cellHeight={180} cols={3}>
        {tileData.map(tile => (
          <StyledTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </StyledTile>
        ))}
      </StyledGridList>
    </StyledGridListContainer>
  );
}

export default InstagramFeed;

const StyledGridListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  /* height: 250 */
  margin-top: 10em;
  margin-bottom: 10em;

  @media (max-width: 767px) {
    margin-top: 6em;
  }
`;

const StyledGridList = styled(GridList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

const StyledTile = styled(GridListTile)`
  height: 220px;

  @media (max-width > 425px && max-width < 769px) {
    height: 100px;
  }

  @media (max-width > 769px) {
    height: 240px;
  }
`;
