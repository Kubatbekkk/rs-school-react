import React, { Component } from 'react';
import type { ContainerPropsType } from 'types/types';

export class Container extends Component<ContainerPropsType> {
  render(): JSX.Element {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Container;
