import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from './Utils/Container';

export class Header extends Component {
  render(): JSX.Element {
    return (
      <nav className="nav">
        <Container>
          <Link to={'/'} className="header-logo">
            TypeJam
          </Link>
          <Link to={'/about'}>About</Link>
        </Container>
      </nav>
    );
  }
}

export default Header;
