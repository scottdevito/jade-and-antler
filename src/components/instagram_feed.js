import React from 'react';
import styled from 'styled-components';
import { GridList, GridListTile } from 'material-ui/GridList';
import { tileData } from '../images/mockIgPics/tileData';

function InstagramFeed(props) {
  return (
    <StyledGridListContainer>
      <StyledGridList cellHeight={160} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
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
  width: 65vw;
  /* height: 250 */
  margin-top: 4em;
  margin-bottom: 4em;
`;

const StyledGridList = styled(GridList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;
