import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TaskFormHeader from './TaskFormHeader';

describe('TaskFormHeader', () => {
  it('renders the header title', () => {
    render(<TaskFormHeader />);
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  it('renders the back arrow and menu icons', () => {
    const { container } = render(<TaskFormHeader />);

    // Check for the presence of SVG icons
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(2);
  });
});
