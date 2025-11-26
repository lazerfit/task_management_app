import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CalendarPage from './CalendarPage';

describe('CalendarPage', () => {
  it('renders the page components', () => {
    render(<CalendarPage />);

    // Check for Header content
    expect(screen.getByText('Calendar')).toBeInTheDocument();

    // Check for Main content (DateStrip)
    expect(screen.getByRole('heading', { name: /today/i })).toBeInTheDocument();
  });
});
