import Container from '../components/Utils/Container';
import React, { Component } from 'react';
import CardsList from '../components/CardsList';

class Main extends Component {
  render() {
    return (
      <Container>
        <main className="main">
          <CardsList />
        </main>
      </Container>
    );
  }
}

export default Main;
