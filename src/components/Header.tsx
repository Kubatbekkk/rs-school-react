import React, { Component } from 'react';
import Container from './Utils/Container';

export class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <Container>
          <a href={'/'} className={'nav__link'}>
            Home
          </a>
        </Container>
      </nav>
    );
  }
}

export default Header;
