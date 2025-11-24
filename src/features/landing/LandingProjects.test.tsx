import { render, screen } from '@testing-library/react';
import LandingProjects from './LandingProjects';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/components/ui/BoxProject', () => ({
  default: () => <div data-testid="box-project">BoxProject</div>,
}));

describe('LandingProjects', () => {
  it('renders project box', () => {
    render(<LandingProjects />);
    expect(screen.getByTestId('box-project')).toBeInTheDocument();
  });
});
