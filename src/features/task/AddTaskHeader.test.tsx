import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AddTaskHeader from './AddTaskHeader';

describe('AddTaskHeader', () => {
  it('renders the header title', () => {
    render(<AddTaskHeader />);
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  it('renders the back arrow and menu icons', () => {
    const { container } = render(<AddTaskHeader />);

    // Check for the presence of SVG icons
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(2);
  });
});
