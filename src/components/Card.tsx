import React, { Component } from 'react';

type PropsType = {
  key: string;
  name: string;
  img: string;
  desc: string;
};

export class Card extends Component<PropsType> {
  render() {
    const { name, desc, img } = this.props;
    return (
      <div className="card">
        <header className="card__header">{name}</header>
        <div className="card__wrapper">
          <section className="card__body">
            <img src={img} alt={desc} className="card__img" />
            <p className="card__desc">{desc}</p>
          </section>
          <footer className="card__footer">
            <div className="card__footer-left">
              <img src={img} alt={name} className="card__footer-left-img" />
              <img src={img} alt={name} className="card__footer-left-img" />
              <img src={img} alt={name} className="card__footer-left-img" />
            </div>
            <a href="#" className="card__btn">
              more info...
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Card;
