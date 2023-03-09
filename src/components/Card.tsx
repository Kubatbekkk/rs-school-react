import React, { Component } from 'react';

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <header className="card__header">Card Title</header>
        <div className="card__wrapper">
          <section className="card__body">
            <img
              src="https://avatars.mds.yandex.net/i?id=d597b730b96172640031b92cce4c1e2b4097398a-8502968-images-thumbs&n=13"
              alt="strawberry jam"
              className="card__img"
            />
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
              asperioresdicta ex s dignissimos?
            </p>
          </section>
          <footer className="card__footer">
            <div className="card__footer-left">
              <img
                src="https://avatars.mds.yandex.net/i?id=d597b730b96172640031b92cce4c1e2b4097398a-8502968-images-thumbs&n=13"
                alt="strawberry jam"
                className="card__footer-left-img"
              />
              <img
                src="https://avatars.mds.yandex.net/i?id=d597b730b96172640031b92cce4c1e2b4097398a-8502968-images-thumbs&n=13"
                alt="strawberry jam"
                className="card__footer-left-img"
              />
              <img
                src="https://avatars.mds.yandex.net/i?id=d597b730b96172640031b92cce4c1e2b4097398a-8502968-images-thumbs&n=13"
                alt="strawberry jam"
                className="card__footer-left-img"
              />
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
