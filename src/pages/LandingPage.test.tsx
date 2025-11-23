import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('@/features/landing/LandingHeader', () => ({
  default: () => <div data-testid="landing-header">LandingHeader</div>,
}));

vi.mock('@/features/landing/LandingTasks', () => ({
  default: () => <div data-testid="landing-tasks">LandingTasks</div>,
}));

vi.mock('@/features/landing/LandingProjects', () => ({
  default: () => <div data-testid="landing-projects">LandingProjects</div>,
}));

describe('LandingPage', () => {
  it('renders all landing sections', () => {
    render(<LandingPage />);

    expect(screen.getByTestId('landing-header')).toBeInTheDocument();
    expect(screen.getByTestId('landing-tasks')).toBeInTheDocument();
    expect(screen.getByTestId('landing-projects')).toBeInTheDocument();
  });
});
