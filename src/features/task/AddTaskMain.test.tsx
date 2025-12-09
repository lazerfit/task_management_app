import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AddTaskMain from './AddTaskMain';

describe('AddTaskMain', () => {
  it('renders the title correctly', () => {
    render(<AddTaskMain />);
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
  });

  it('renders all select placeholders', () => {
    render(<AddTaskMain />);
    // The label text appears in the div next to the select
    expect(screen.getAllByText('Status')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Priority')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Start Date')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Due Date')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Assignee')[0]).toBeInTheDocument();
  });

  it('shows options when Status select is clicked', () => {
    render(<AddTaskMain />);

    const triggers = screen.getAllByRole('combobox');
    const statusTrigger = triggers[0];

    fireEvent.click(statusTrigger);

    expect(screen.getByText('Todo')).toBeInTheDocument();
    expect(screen.getByText('In progress')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Canceled')).toBeInTheDocument();
  });
});
