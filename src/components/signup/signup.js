import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';

import EmailSubmitSuccessMessage from './emailSubmitSuccessMessage';
import SignupInput from './signup_input.MUI';

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

        <SignupInput onEmailInputChange={this.onEmailInputChange} />

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
  height: 20em;
  transition: all 12s ease;
`;

const StyledSubtleText = styled.p`
  color: #5f5e5e;
  margin: 0.75em;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 1em;
  margin-bottom: 2em;
`;
