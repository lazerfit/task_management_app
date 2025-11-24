import { render, screen } from '@testing-library/react';
import ProjectsMain from './ProjectsMain';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('./Navigation', () => ({
  default: () => <div data-testid="navigation">Navigation</div>,
}));

vi.mock('@/components/ui/BoxProject', () => ({
  default: () => <div data-testid="box-project">BoxProject</div>,
}));

describe('ProjectsMain', () => {
  it('renders navigation and project list', () => {
    render(<ProjectsMain />);

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('box-project')).toBeInTheDocument();
  });
});
