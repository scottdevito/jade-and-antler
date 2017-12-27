import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';

class AppBarNav extends Component {
  render() {
    return (
      <StyledAppBar position="static" color="default">
        <StyledNavLinks>
          <StyledNavLink>About Us</StyledNavLink>
          <StyledNavLink>Workshops</StyledNavLink>
          <StyledNavLink>Blog</StyledNavLink>
        </StyledNavLinks>
      </StyledAppBar>
    );
  }
}

export default AppBarNav;

const StyledAppBar = styled(AppBar)`
  width: 100%;
  height: 4em;
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
`;

const StyledNavLink = styled.p`
  margin: 1.5em;
`;
