import { render, screen } from '@testing-library/react';
import Page from './Page';
import { describe, it, expect } from 'vitest';

describe('Page', () => {
  it('renders children correctly', () => {
    render(
      <Page>
        <div data-testid="child">Child Content</div>
      </Page>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('has correct layout classes', () => {
    render(
      <Page>
        <div>Content</div>
      </Page>,
    );
    // We can check for specific classes that define the layout
    // "border w-full h-full relative flex flex-col overflow-hidden"
    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass('w-full');
    expect(container).toHaveClass('h-full');
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('flex-col');
  });
});
