import { render, screen } from '@testing-library/react';
import LandingProjects from './LandingProjects';
import { describe, it, expect, vi, type Mock } from 'vitest';
import * as useProjectQueries from '../projects/hooks/useProjectQueries';

// Mock BoxProject
vi.mock('@/features/projects/components/BoxProject', () => ({
  default: ({ name }: { name: string }) => (
    <div data-testid="box-project">{name}</div>
  ),
}));

// Mock hook
vi.mock('../projects/hooks/useProjectQueries', () => ({
  useGetProjects: vi.fn(),
}));

describe('LandingProjects', () => {
  it('renders projects when data is available', () => {
    const mockProjects = [
      { id: 1, name: 'Project A' },
      { id: 2, name: 'Project B' },
    ];
    (useProjectQueries.useGetProjects as Mock).mockReturnValue({
      data: mockProjects,
      isPending: false,
      error: null,
    });

    render(<LandingProjects />);

    expect(screen.getAllByTestId('box-project')).toHaveLength(2);
    expect(screen.getByText('Project A')).toBeInTheDocument();
    expect(screen.getByText('Project B')).toBeInTheDocument();
  });

  it('renders nothing when data is undefined', () => {
    (useProjectQueries.useGetProjects as Mock).mockReturnValue({
      data: undefined,
      isPending: false,
      error: null,
    });

    render(<LandingProjects />);

    expect(screen.queryByTestId('box-project')).not.toBeInTheDocument();
  });
});
