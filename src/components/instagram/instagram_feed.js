import React from 'react';
import styled from 'styled-components';
import { tileData } from '../../images/mockIgPics/tileData';

// import InstagramFeedHeader from './instagram_feed_header';

function InstagramFeed(props) {
  return (
    <StyledGridListContainer>
      {tileData.map(tile => {
        console.log(tile.img);
        <StyledTile key={tile.img} imgSrc={tile.img} />;
      })}
    </StyledGridListContainer>
  );
}

export default InstagramFeed;

const StyledGridListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65vw;
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

const StyledTile = styled.div`
  height: 100px;
  background-image: url('${props => props.imgSrc}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width > 425px && max-width < 769px) {
    height: 100px;
  }

  @media (max-width > 769px) {
    height: 240px;
  }
`;
