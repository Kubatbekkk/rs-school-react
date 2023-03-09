import React, { Component } from 'react';
import Card from './Card';

export class CardsList extends Component {
  render() {
    return (
      <div className="main__card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default CardsList;
