import { render, screen } from '@testing-library/react';
import TaskFormPage from './TaskFormPage';
import { describe, it, expect, vi } from 'vitest';

// Mock child components to avoid integration issues and focus on page structure
vi.mock('@/features/addTask/TaskFormHeader', () => ({
  default: () => <div data-testid="add-task-header">AddTaskHeader</div>,
}));

vi.mock('@/features/addTask/TaskFormMain', () => ({
  default: () => <div data-testid="add-task-main">AddTaskMain</div>,
}));

describe('TaskFormPage', () => {
  it('renders header and main content', () => {
    render(<TaskFormPage />);

    expect(screen.getByTestId('add-task-header')).toBeInTheDocument();
    expect(screen.getByTestId('add-task-main')).toBeInTheDocument();
  });
});
