import { render, screen } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('@/features/projects/ProjectsHeader', () => ({
  default: () => <div data-testid="projects-header">ProjectsHeader</div>,
}));

vi.mock('@/features/projects/ProjectsMain', () => ({
  default: () => <div data-testid="projects-main">ProjectsMain</div>,
}));

describe('ProjectsPage', () => {
  it('renders header and main content', () => {
    render(<ProjectsPage />);

    expect(screen.getByTestId('projects-header')).toBeInTheDocument();
    expect(screen.getByTestId('projects-main')).toBeInTheDocument();
  });
});
