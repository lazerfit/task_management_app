import { render, screen } from '@testing-library/react';
import BoxProject from './BoxProject';
import { describe, it, expect } from 'vitest';

describe('BoxProject', () => {
  it('renders project name', () => {
    const projectName = 'Test Project';
    render(<BoxProject name={projectName} />);

    expect(screen.getByText(projectName)).toBeInTheDocument();
  });
});
