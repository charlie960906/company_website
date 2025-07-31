import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home', () => {
  it('renders hero section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/我們致力於科技開發/)).toBeInTheDocument();
  });

  it('renders features section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('雲端服務')).toBeInTheDocument();
    expect(screen.getByText('網路安全和表達自由')).toBeInTheDocument();
    expect(screen.getByText('為學習做準備')).toBeInTheDocument();
  });

  it('renders partner section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('成為合作夥伴')).toBeInTheDocument();
  });

  it('renders newsletter section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/關注更多有關/)).toBeInTheDocument();
  });

  it('has correct links', () => {
    renderWithRouter(<Home />);
    const links = screen.getAllByRole('link');
    expect(links.some(link => link.getAttribute('href') === '/hosting')).toBe(
      true
    );
    expect(links.some(link => link.getAttribute('href') === '/security')).toBe(
      true
    );
    expect(links.some(link => link.getAttribute('href') === '/slrc')).toBe(
      true
    );
    expect(links.some(link => link.getAttribute('href') === '/partner')).toBe(
      true
    );
    expect(links.some(link => link.getAttribute('href') === '/updates')).toBe(
      true
    );
  });
});
