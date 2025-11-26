import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DateStrip from './DateStrip';
import dayjs from 'dayjs';

describe('DateStrip', () => {
  it('renders the "Today" heading', () => {
    render(<DateStrip />);
    expect(screen.getByRole('heading', { name: /today/i })).toBeInTheDocument();
  });

  it('renders the current date', () => {
    render(<DateStrip />);
    const dateNow = dayjs().format('YYYY-MM-DD');
    expect(screen.getByText(dateNow)).toBeInTheDocument();
  });
});
