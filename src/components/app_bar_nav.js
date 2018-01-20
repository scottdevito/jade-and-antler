import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import { NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';

class AppBarNav extends Component {
  render() {
    return (
      <StyledAppBar color="default">
        <StyledNavLinks>
          <StyledNavLink>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Button>Home</Button>
            </NavLink>
          </StyledNavLink>
          <StyledNavLink>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <Button>About</Button>
            </NavLink>
          </StyledNavLink>
          <StyledNavLink>
            <NavLink to="/workshops" style={{ textDecoration: 'none' }}>
              <Button>Workshops</Button>
            </NavLink>
          </StyledNavLink>
          <StyledNavLink>
            <NavLink to="/podcast" style={{ textDecoration: 'none' }}>
              <Button>Podcast</Button>
            </NavLink>
          </StyledNavLink>
        </StyledNavLinks>
      </StyledAppBar>
    );
  }
}

export default AppBarNav;

const StyledAppBar = styled(AppBar)`
  width: 100%;
  height: 3.5em;
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  height: 100%;
`;

const StyledNavLink = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin: 0;
`;
