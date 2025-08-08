import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

// Mock react-helmet
vi.mock('react-helmet', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='helmet'>{children}</div>
  ),
}));

// Mock components
vi.mock('src/components/Header', () => ({
  default: () => <div data-testid='header'>Header</div>,
}));

vi.mock('src/components/Footer', () => ({
  default: () => <div data-testid='footer'>Footer</div>,
}));

vi.mock('src/pages/Home', () => ({
  default: () => <div data-testid='home'>Home Page</div>,
}));

const renderWithRouter = (component: React.ReactElement) =>
  render(<BrowserRouter>{component}</BrowserRouter>);

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderWithRouter(<App />);
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('footer')).toBeInTheDocument();
  });

  it('renders helmet for SEO', () => {
    const { getByTestId } = renderWithRouter(<App />);
    expect(getByTestId('helmet')).toBeInTheDocument();
  });

  it('has main content area', () => {
    const { getByRole } = renderWithRouter(<App />);
    const main = getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
