import { render, screen } from '@testing-library/react';
import LandingMain from './LandingMain';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('./LandingTasks', () => ({
  default: () => <div data-testid="landing-tasks">LandingTasks</div>,
}));

vi.mock('./LandingProjects', () => ({
  default: () => <div data-testid="landing-projects">LandingProjects</div>,
}));

describe('LandingMain', () => {
  it('renders tasks and projects sections', () => {
    render(<LandingMain />);

    expect(screen.getByTestId('landing-tasks')).toBeInTheDocument();
    expect(screen.getByTestId('landing-projects')).toBeInTheDocument();
  });
});
