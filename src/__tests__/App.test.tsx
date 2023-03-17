import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('renders App component', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders logo', () => {
    render(<App />);
    expect(screen.getByText('TypeJam')).toBeInTheDocument();
  });

  it('displays about link', () => {
    render(<App />);
    expect(screen.getByText(/About/)).toBeInTheDocument();
  });
});
