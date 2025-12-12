import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import ProjectFormMain from './ProjectFormMain';
import * as useProjectQueries from './hooks/useProjectQueries';

// Mock the hook
vi.mock('./hooks/useProjectQueries', () => ({
  useCreateProject: vi.fn(),
}));

describe('ProjectFormMain', () => {
  const mockMutate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useProjectQueries.useCreateProject as Mock).mockReturnValue({
      mutate: mockMutate,
    });
  });

  it('renders input and button', () => {
    render(<ProjectFormMain />);

    expect(
      screen.getByPlaceholderText(/enter project name/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /save project/i }),
    ).toBeInTheDocument();
  });

  it('updates input value', async () => {
    const user = userEvent.setup();
    render(<ProjectFormMain />);

    const input = screen.getByPlaceholderText(/enter project name/i);
    await user.type(input, 'New Project');

    expect(input).toHaveValue('New Project');
  });

  it('calls createProject when button is clicked with valid input', async () => {
    const user = userEvent.setup();
    render(<ProjectFormMain />);

    const input = screen.getByPlaceholderText(/enter project name/i);
    const button = screen.getByRole('button', { name: /save project/i });

    await user.type(input, 'New Project');
    await user.click(button);

    expect(mockMutate).toHaveBeenCalledWith({ name: 'New Project' });
  });

  it('button is disabled when input is empty', () => {
    render(<ProjectFormMain />);

    const button = screen.getByRole('button', { name: /save project/i });
    expect(button).toBeDisabled();
  });

  it('does not call createProject when input is empty (even if forced click)', async () => {
    const user = userEvent.setup();
    render(<ProjectFormMain />);

    const button = screen.getByRole('button', { name: /save project/i });

    // Attempt to click even if disabled (userEvent respects disabled, but purely logical check)
    await user.click(button);

    expect(mockMutate).not.toHaveBeenCalled();
  });
});
