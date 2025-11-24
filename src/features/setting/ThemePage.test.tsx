import { render, screen } from '@testing-library/react';
import ThemePage from './ThemePage';
import { describe, it, expect } from 'vitest';

describe('ThemePage', () => {
  it('renders theme settings content', () => {
    render(<ThemePage />);

    expect(screen.getByText('Theme Settings')).toBeInTheDocument();
    expect(
      screen.getByText('Theme settings content will go here.'),
    ).toBeInTheDocument();
  });
});
