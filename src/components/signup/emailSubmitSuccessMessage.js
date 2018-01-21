import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom';

class EmailSubmitSuccessMessage extends Component {
  render() {
    return (
      <StyledSignupSuccessMessage>
        <h1>Thanks for signing up!</h1>
        <StyledSubtleText>
          We're looking forward to keeping you posted.
        </StyledSubtleText>

        <NavLink to="/workshops" style={{ textDecoration: 'none' }}>
          <StyledButton
            style={{
              background: '#7b675a',
              borderRadius: 3,
              border: 0,
              color: 'white',
              padding: '0 30px',
            }}
          >
            Check Out Our Workshops
          </StyledButton>
        </NavLink>
      </StyledSignupSuccessMessage>
    );
  }
}

export default EmailSubmitSuccessMessage;

const StyledSignupSuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e4e0e1;
  width: 100%;
  padding-top: 3em;
  padding-bottom: 3em;
  height: 20em;

  transition: all 1s ease;
`;

const StyledSubtleText = styled.p`
  color: #5f5e5e;
  margin: 1em;
  padding-bottom: 2em;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 1em;
  margin-bottom: 2em;
`;
