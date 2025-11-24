import { render, screen } from '@testing-library/react';
import BoxProject from './BoxProject';
import { describe, it, expect } from 'vitest';

describe('BoxProject', () => {
  it('renders project list items', () => {
    render(<BoxProject />);

    expect(screen.getByText('Task Management')).toBeInTheDocument();
    expect(screen.getByText('12 tasks')).toBeInTheDocument();
    expect(screen.getAllByText('Snapping')).toHaveLength(2);
  });
});
