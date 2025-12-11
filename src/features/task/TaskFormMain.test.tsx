import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskFormMain from './TaskFormMain';

vi.mock('./hooks/useTaskQueries', () => ({
  useCreateTask: () => ({
    mutate: vi.fn(),
  }),
}));

describe('TaskFormMain', () => {
  it('renders the title correctly', () => {
    render(<TaskFormMain />);
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
  });

  it('renders the task name input and save button', () => {
    render(<TaskFormMain />);
    expect(screen.getByText('Task Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter task name')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /save task/i }),
    ).toBeInTheDocument();
  });

  it('renders all select placeholders', () => {
    render(<TaskFormMain />);
    // The label text appears in the div next to the select
    expect(screen.getAllByText('Status')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Priority')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Start Date')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Due Date')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Assignee')[0]).toBeInTheDocument();
  });

  it('shows options when Status select is clicked', () => {
    render(<TaskFormMain />);

    const triggers = screen.getAllByRole('combobox');
    const statusTrigger = triggers[0];

    fireEvent.click(statusTrigger);

    expect(screen.getAllByText('TODO')[0]).toBeInTheDocument();
    expect(screen.getByText('IN_PROGRESS')).toBeInTheDocument();
    expect(screen.getByText('COMPLETE')).toBeInTheDocument();
    expect(screen.getByText('CANCELED')).toBeInTheDocument();
  });
});
