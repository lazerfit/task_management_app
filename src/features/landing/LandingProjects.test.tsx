import { render, screen } from '@testing-library/react';
import LandingProjects from './LandingProjects';
import { describe, it, expect } from 'vitest';

describe('LandingProjects', () => {
  it('renders project list', () => {
    render(<LandingProjects />);

    expect(screen.getByText('Task Management')).toBeInTheDocument();
    expect(screen.getByText('12 tasks')).toBeInTheDocument();
    expect(screen.getAllByText('Snapping')).toHaveLength(2);
  });
});
