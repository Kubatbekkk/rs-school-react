import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('<Header />', () => {
  it('renders the header links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /TypeJam/i });
    expect(homeLink.getAttribute('href')).toBe('/');

    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink.getAttribute('href')).toBe('/about');
  });
});
