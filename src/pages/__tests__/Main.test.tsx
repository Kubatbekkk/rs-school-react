import React from 'react';
import { render } from '@testing-library/react';
import Main from '../Main';

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />);
    expect(container.querySelector('.main')).toBeTruthy();
    expect(container.querySelector('.search')).toBeTruthy();
    expect(container.querySelector('.container')).toBeTruthy();
  });
});
