import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
}));

// Mock window.scrollTo
const mockScrollTo = vi.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

describe('useScrollToTop', () => {
  const mockUseLocation = useLocation as any;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should scroll to top when pathname changes', () => {
    mockUseLocation.mockReturnValue({ pathname: '/test' });

    renderHook(() => useScrollToTop());

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should call scrollTo with correct parameters', () => {
    mockUseLocation.mockReturnValue({ pathname: '/home' });

    renderHook(() => useScrollToTop());

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
