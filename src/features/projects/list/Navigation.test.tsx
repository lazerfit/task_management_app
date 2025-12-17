import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';
import { describe, it, expect, vi } from 'vitest';

describe('Navigation', () => {
  it('renders all options', () => {
    const onChange = vi.fn();
    render(<Navigation filter="" onChange={onChange} />);

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('In progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('updates selection on click', () => {
    const onChange = vi.fn();
    render(<Navigation filter="" onChange={onChange} />);

    const inProgressButton = screen.getByText('In progress');

    // Click In progress
    fireEvent.click(inProgressButton);

    expect(onChange).toHaveBeenCalledWith('IN_PROGRESS');
  });
});
