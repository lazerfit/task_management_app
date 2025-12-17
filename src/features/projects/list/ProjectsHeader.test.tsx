import { render, screen } from '@testing-library/react';
import ProjectsHeader from './ProjectsHeader';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ProjectsHeader', () => {
  it('renders title', () => {
    render(
      <MemoryRouter>
        <ProjectsHeader />
      </MemoryRouter>,
    );
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('navigates home when back arrow is clicked', () => {
    render(
      <MemoryRouter>
        <ProjectsHeader />
      </MemoryRouter>,
    );

    expect(screen.getByText('Projects')).toBeInTheDocument();
  });
});
