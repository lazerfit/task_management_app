import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';
import { describe, it, expect } from 'vitest';

describe('Navigation', () => {
  it('renders all options', () => {
    render(<Navigation />);

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('In progress')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('updates selection on click', () => {
    render(<Navigation />);

    const allButton = screen.getByText('All');
    const inProgressButton = screen.getByText('In progress');

    // Initial state: All is selected (bg-gray-100)
    expect(allButton).toHaveClass('bg-gray-100');
    expect(inProgressButton).not.toHaveClass('bg-gray-100');

    // Click In progress
    fireEvent.click(inProgressButton);

    expect(allButton).not.toHaveClass('bg-gray-100');
    expect(inProgressButton).toHaveClass('bg-gray-100');
  });
});
