import React, { Component } from 'react';
import Card from './Card';
import type { Item } from '../data/items';
import data from '../data/items';
import Search from './Search';

type StateType = {
  items: Array<Item>;
};

export class CardsList extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: data,
    };
  }
  render() {
    return (
      <>
        <Search />
        <div className="main__card">
          {this.state.items.map((item) => (
            <Card key={item.id} name={item.name} img={item.img} desc={item.desc} />
          ))}
        </div>
      </>
    );
  }
}

export default CardsList;
