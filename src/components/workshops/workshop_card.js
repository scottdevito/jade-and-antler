import React from 'react';
import styled from 'styled-components';

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ShareIcon from 'material-ui-icons/Share';

const WorkshopCard = ({ event }) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar aria-label="Workshop">W</Avatar>}
        title={event.name}
        subheader={`${event.month} ${event.day}, ${event.year}`}
      />
      <CardContent>
        <Typography paragraph type="p" style={{ marginBottom: '1px' }}>
          <a href={event.eventLink} rel="noopener noreferrer" target="_blank">
            {event.venue}
          </a>
        </Typography>
        <Typography paragraph type="p" style={{ marginBottom: '1px' }}>
          {event.address} {` ${event.location}`}
        </Typography>
        <Typography paragraph type="p" style={{ marginBottom: '1px' }}>
          {`${event.timeStart} - `} {event.timeEnd}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="p">{event.description}</Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};
export default WorkshopCard;

const StyledCard = styled(Card)`
  width: 96%;
  max-width: 700px;
  margin: 0.5em;

  @media (min-width: 1439px) {
    max-width: 1050px;
  }
`;
