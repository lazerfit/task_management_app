import { render, screen } from '@testing-library/react';
import LandingTasks from './LandingTasks';
import { describe, it, expect } from 'vitest';

describe('LandingTasks', () => {
  it('renders tasks summary', () => {
    render(<LandingTasks />);

    expect(screen.getByText('Tasks')).toBeInTheDocument();
    expect(screen.getByText('Todo')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Cancled')).toBeInTheDocument();
  });

  it('renders task counts', () => {
    render(<LandingTasks />);

    expect(screen.getByText('10 tasks')).toBeInTheDocument();
    expect(screen.getByText('20 tasks')).toBeInTheDocument();
    expect(screen.getByText('14 tasks')).toBeInTheDocument();
    expect(screen.getByText('2 tasks')).toBeInTheDocument();
  });
});
