import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

test('renders Card component', () => {
  const props = {
    name: 'Test Name',
    desc: 'Test Description',
    img: 'test.jpg',
    key: 'test',
  };
  render(<Card {...props} />);
  const nameElement = screen.getByText(props.name);
  const descElement = screen.getByText(props.desc);
  const imgElement = screen.getByAltText(props.desc);
  expect(nameElement).toBeInTheDocument();
  expect(descElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});
