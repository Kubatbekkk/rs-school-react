import Container from '../components/Utils/Container';
import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import Search from '../components/Search';

class Main extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <main className="main">
          <Search />
          <CardsList />
        </main>
      </Container>
    );
  }
}

export default Main;
