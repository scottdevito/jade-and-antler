import React from 'react';
import styled from 'styled-components';

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ShareIcon from 'material-ui-icons/Share';
import Button from 'material-ui/Button';

// const currentDate = new Date();

const WorkshopCard = ({ event }) => {
  // console.log(currentDate.toString().slice(4, 15));
  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar aria-label="Workshop">W</Avatar>}
        title={event.name}
        subheader={`${event.month} ${event.day}, ${event.year}`}
      />
      <CardContent>
        <Typography paragraph type="subheading" style={{ marginBottom: '1px' }}>
          <a href={event.venueLink} rel="noopener noreferrer" target="_blank">
            {event.venue}
          </a>
        </Typography>
        <Typography paragraph type="subheading" style={{ marginBottom: '1px' }}>
          {`${event.address} ${event.location}`}
        </Typography>
        <Typography paragraph type="subheading" style={{ marginBottom: '1px' }}>
          {`${event.timeStart} - ${event.timeEnd}`}
        </Typography>
        <Typography paragraph type="subheading" style={{ marginBottom: '1px' }}>
          {`Earlybird price (two weeks before): $${event.earlybirdPrice}`}
        </Typography>
        <Typography paragraph type="subheading" style={{ marginBottom: '1px' }}>
          {`Regular price: $${event.regularPrice}`}
        </Typography>
        <StyledExternalLink
          href={event.ticketLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledButton
            style={{
              background: '#7b675a',
              borderRadius: 3,
              border: 0,
              color: 'white',
              padding: '0 20px',
            }}
          >
            Buy Tickets
          </StyledButton>
        </StyledExternalLink>
      </CardContent>
      <CardContent>
        <Typography component="p" type="title">
          {event.descriptionHeader}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="p" type="body1">
          {event.descriptionMain}
        </Typography>
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

const StyledButton = styled(Button)`
  margin-top: 0.25em;
  margin-bottom: 1.5em;
`;

const StyledExternalLink = styled.a`
  text-decoration: none;
`;
