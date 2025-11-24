import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('@/features/landing/LandingHeader', () => ({
  default: () => <div data-testid="landing-header">LandingHeader</div>,
}));

vi.mock('@/features/landing/LandingMain', () => ({
  default: () => <div data-testid="landing-main">LandingMain</div>,
}));

describe('LandingPage', () => {
  it('renders all landing sections', () => {
    render(<LandingPage />);

    expect(screen.getByTestId('landing-header')).toBeInTheDocument();
    expect(screen.getByTestId('landing-main')).toBeInTheDocument();
  });
});
