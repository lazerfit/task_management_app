import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';
import { describe, it, expect } from 'vitest';

describe('MainContent', () => {
  it('renders children correctly', () => {
    render(
      <MainContent>
        <div data-testid="child">Child Content</div>
      </MainContent>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('applies additional className', () => {
    render(
      <MainContent className="custom-class">
        <div>Content</div>
      </MainContent>,
    );
    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass('custom-class');
    expect(container).toHaveClass('w-full'); // Should still have base classes
  });
});
