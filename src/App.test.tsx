import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders heading', () => {
    render(<App />);
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });
  it('displays Header', () => {
    render(<App />);
    expect(screen.getByText(/TypeJam/)).toBeInTheDocument();
  });
});
