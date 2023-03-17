import React from 'react';
import { render } from '@testing-library/react';
import CardsList from '../components/CardsList';

test('renders CardList component', () => {
  const { getByTestId } = render(<CardsList />);
  const cardListElement = getByTestId('card-list');
  expect(cardListElement).toBeInTheDocument();
});
