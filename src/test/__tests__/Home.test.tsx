import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';

const renderWithRouter = (component: React.ReactElement) =>
  render(<BrowserRouter>{component}</BrowserRouter>);

describe('Home', () => {
  it('renders hero section', () => {
    const { getByText } = renderWithRouter(<Home />);
    expect(getByText(/我們致力於科技開發/)).toBeInTheDocument();
  });

  it('renders features section', () => {
    const { getByText } = renderWithRouter(<Home />);
    expect(getByText('網站製作')).toBeInTheDocument();
    expect(getByText('家教媒合 App（規劃中）')).toBeInTheDocument();
    expect(getByText('為學習做準備')).toBeInTheDocument();
  });

  it('renders partner section', () => {
    const { getByText } = renderWithRouter(<Home />);
    expect(getByText('成為合作夥伴')).toBeInTheDocument();
  });

  it('renders updates teaser section', () => {
    const { getByText } = renderWithRouter(<Home />);
    expect(getByText(/關注更多有關/)).toBeInTheDocument();
  });

  it('has correct links', () => {
    const { getAllByRole } = renderWithRouter(<Home />);
    const links = getAllByRole('link');
    expect(
      links.some(
        (link: HTMLElement) => link.getAttribute('href') === '/partner'
      )
    ).toBe(true);
    expect(
      links.some(
        (link: HTMLElement) => link.getAttribute('href') === '/security'
      )
    ).toBe(true);
    // /slrc 已轉址至 /tutorgo
    expect(
      links.some((link: HTMLElement) => link.getAttribute('href') === '/tutorgo')
    ).toBe(true);
    expect(
      links.some(
        (link: HTMLElement) => link.getAttribute('href') === '/partner'
      )
    ).toBe(true);
    expect(
      links.some(
        (link: HTMLElement) => link.getAttribute('href') === '/updates'
      )
    ).toBe(true);
  });
});
