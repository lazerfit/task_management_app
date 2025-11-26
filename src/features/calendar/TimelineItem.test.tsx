import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TimelineItem from './TimelineItem';

describe('TimelineItem', () => {
  it('renders the section title', () => {
    render(<TimelineItem />);
    expect(
      screen.getByRole('heading', { name: /daily task/i }),
    ).toBeInTheDocument();
  });

  it('renders the task items', () => {
    render(<TimelineItem />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
  });

  it('renders the time labels', () => {
    render(<TimelineItem />);
    // There are multiple occurrences of the time, so we use getAllByText
    expect(screen.getAllByText('09:00AM')[0]).toBeInTheDocument();
    expect(screen.getAllByText('10:00AM')[0]).toBeInTheDocument();
  });

  it('renders the status of tasks', () => {
    render(<TimelineItem />);
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });
});
