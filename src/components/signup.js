import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class Signup extends Component {
  render() {
    return (
      <StyledSignup>
        <h1>Sign up for updates</h1>
        <StyledSubtleText>
          Sign up to receive the latest news on new workshops and blog posts
        </StyledSubtleText>
        <TextField
          label="Enter your email"
          style={{
            width: 250,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 0,
          }}
          margin="normal"
        />
        <Button style={{ marginTop: '1em', marginBottom: '2em' }}>
          Submit
        </Button>
      </StyledSignup>
    );
  }
}

export default Signup;

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e4e0e1;
  width: 100%;
  padding-top: 3em;
  padding-bottom: 3em;
`;

const StyledSubtleText = styled.p`
  color: #5f5e5e;
  margin: 1em;
  text-align: center;
`;
