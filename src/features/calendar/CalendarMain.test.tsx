import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CalendarMain from './CalendarMain';

describe('CalendarMain', () => {
  it('renders all child components', () => {
    render(<CalendarMain />);

    // Check for DateStrip content
    expect(screen.getByRole('heading', { name: /today/i })).toBeInTheDocument();

    // Check for TimelineItem content
    expect(
      screen.getByRole('heading', { name: /daily task/i }),
    ).toBeInTheDocument();

    // Check for DateScroll content (current date button)
    // We can just check if any button exists, as DateScroll renders buttons
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });
});
