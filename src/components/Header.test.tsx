import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  it('renders the header links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', { name: /TypeJam/ });
    expect(homeLink.getAttribute('href')).toBe('/');

    const aboutLink = screen.getByRole('link', { name: /About/ });
    expect(aboutLink.getAttribute('href')).toBe('/about');
  });
});
