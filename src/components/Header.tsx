import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Utils/Container';
import classes from './Header.module.css';

export class Header extends Component {
  render(): JSX.Element {
    return (
      <nav className="nav">
        <Container>
          <NavLink to={'/'} className="header-logo">
            TypeJam
          </NavLink>
          <NavLink
            end
            to={'/'}
            className={({ isActive }) => (isActive ? classes.active : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            end
            to={'/about'}
            className={({ isActive }) => (isActive ? classes.active : undefined)}
          >
            About
          </NavLink>
        </Container>
      </nav>
    );
  }
}

export default Header;
