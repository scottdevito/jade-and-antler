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
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <Button>About Us</Button>
            </NavLink>
          </StyledNavLink>
          <StyledNavLink>
            <NavLink to="/workshops" style={{ textDecoration: 'none' }}>
              <Button>Workshops</Button>
            </NavLink>
          </StyledNavLink>
          <StyledNavLink>
            <NavLink to="/blog" style={{ textDecoration: 'none' }}>
              <Button>Blog</Button>
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
  height: 4em;
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
`;

const StyledNavLink = styled.p`
  height: 100%;
`;
