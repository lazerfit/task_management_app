import { render, screen } from '@testing-library/react';
import ProjectFormHeader from './ProjectFormHeader';
import { describe, it, expect } from 'vitest';

describe('ProjectFormHeader', () => {
  it('renders header with correct title', () => {
    render(<ProjectFormHeader />);
    expect(screen.getByText(/project form/i)).toBeInTheDocument();
  });
});
