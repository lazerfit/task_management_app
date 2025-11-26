import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CalendarHeader from './CalendarHeader';

describe('CalendarHeader', () => {
  it('renders the title', () => {
    render(<CalendarHeader />);
    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });

  it('renders the navigation buttons', () => {
    render(<CalendarHeader />);
    expect(
      screen.getByRole('button', { name: /go back/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
  });
});
