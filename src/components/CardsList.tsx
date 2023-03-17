import React, { Component } from 'react';
import Card from './Card';
import data from '../data/items';
import Search from './Search';
import type { CardListStateType } from 'types/types';

export class CardsList extends Component<{}, CardListStateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: data,
    };
  }
  render(): JSX.Element {
    return (
      <>
        <Search />
        <div className="main__card" data-testid="card-list">
          {this.state.items.map((item) => (
            <Card key={item.id} name={item.name} img={item.img} desc={item.desc} />
          ))}
        </div>
      </>
    );
  }
}

export default CardsList;
