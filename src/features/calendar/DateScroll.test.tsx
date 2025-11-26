import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import DateScroll from './DateScroll';
import dayjs from 'dayjs';

describe('DateScroll', () => {
  it('renders the current date', () => {
    render(<DateScroll />);
    const todayDate = dayjs().date().toString();
    // The date is rendered in a button
    const dateButtons = screen.getAllByRole('button');
    // We expect at least one button to contain the current date text
    const todayButton = dateButtons.find((btn) =>
      btn.textContent?.includes(todayDate),
    );
    expect(todayButton).toBeInTheDocument();
  });

  it('highlights the selected date when clicked', async () => {
    const user = userEvent.setup();
    render(<DateScroll />);

    // Find a date to click (e.g., the 15th of the month, or just the first one)
    // We'll just pick the first button that isn't the active one if possible,
    // but to be safe, let's just click the first button available.
    const buttons = screen.getAllByRole('button');
    const targetButton = buttons[0];

    await user.click(targetButton);

    // Check if it has the active class (bg-indigo-400)
    expect(targetButton).toHaveClass('bg-indigo-400');
  });
});
