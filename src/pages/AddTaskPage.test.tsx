import { render, screen } from '@testing-library/react';
import AddTaskPage from './AddTaskPage';
import { describe, it, expect, vi } from 'vitest';

// Mock child components to avoid integration issues and focus on page structure
vi.mock('@/features/addTask/AddTaskHeader', () => ({
  default: () => <div data-testid="add-task-header">AddTaskHeader</div>,
}));

vi.mock('@/features/addTask/AddTaskMain', () => ({
  default: () => <div data-testid="add-task-main">AddTaskMain</div>,
}));

describe('AddTaskPage', () => {
  it('renders header and main content', () => {
    render(<AddTaskPage />);

    expect(screen.getByTestId('add-task-header')).toBeInTheDocument();
    expect(screen.getByTestId('add-task-main')).toBeInTheDocument();
  });
});
