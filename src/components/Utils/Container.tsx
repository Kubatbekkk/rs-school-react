import React, { Component, ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

export class Container extends Component<PropsType> {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Container;
