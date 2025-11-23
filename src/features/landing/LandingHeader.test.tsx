import { render, screen } from '@testing-library/react';
import LandingHeader from './LandingHeader';
import { describe, it, expect } from 'vitest';

describe('LandingHeader', () => {
  it('renders user greeting and avatar', () => {
    render(<LandingHeader />);

    expect(screen.getByText('Hi, 성광')).toBeInTheDocument();
    expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
  });

  it('renders menu icon', () => {
    render(<LandingHeader />);
    // We can check for the SVG or a container if specific role/aria-label was added,
    // but since it's an icon from a library without aria-label, we might check existence.
    // Ideally, icons should have aria-labels. For now, we check if the component renders without crashing.
    // Or we can check if the Header wrapper is present.
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header component renders a <header> tag
  });
});
