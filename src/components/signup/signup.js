import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import EmailSubmitSuccessMessage from './emailSubmitSuccessMessage';

class Signup extends Component {
  state = {
    email: '',
  };

  onEmailInputChange = event => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { email: value };
    });
  };

  onSubmitEmailToMailingList = () => {
    if (this.state.email !== '') {
      this.props.submitEmailToMailingList(this.state.email);
    }
  };

  render() {
    return this.props.emailSubmitted ? (
      <EmailSubmitSuccessMessage />
    ) : (
      <StyledSignup>
        <h1>Let's stay in touch</h1>
        <StyledSubtleText>
          Sign up to receive the latest news on new workshops and blog posts
        </StyledSubtleText>
        <StyledTextField
          onChange={event => {
            this.onEmailInputChange(event);
          }}
          value={this.state.email}
          type="email"
          label="Enter your email"
          margin="normal"
        />
        <StyledButton
          onClick={() => this.onSubmitEmailToMailingList()}
          style={{
            background: '#7b675a',
            borderRadius: 3,
            border: 0,
            color: 'white',
            padding: '0 30px',
          }}
        >
          Sign up
        </StyledButton>
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

  transition: all 12s ease;
`;

const StyledSubtleText = styled.p`
  color: #5f5e5e;
  margin: 1em;
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  width: 250px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0px;
`;

const StyledButton = styled(Button)`
  margin-top: 1em;
  margin-bottom: 2em;
`;
