import { render, screen } from '@testing-library/react';
import ProjectFormPage from './ProjectFormPage';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('@/features/projects/ProjectFormHeader', () => ({
  default: () => <div data-testid="project-form-header">ProjectFormHeader</div>,
}));

vi.mock('@/features/projects/ProjectFormMain', () => ({
  default: () => <div data-testid="project-form-main">ProjectFormMain</div>,
}));

vi.mock('@/components/template/Page', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-template">{children}</div>
  ),
}));

describe('ProjectFormPage', () => {
  it('renders header and main content', () => {
    render(<ProjectFormPage />);

    expect(screen.getByTestId('project-form-header')).toBeInTheDocument();
    expect(screen.getByTestId('project-form-main')).toBeInTheDocument();
    expect(screen.getByTestId('page-template')).toBeInTheDocument();
  });
});
