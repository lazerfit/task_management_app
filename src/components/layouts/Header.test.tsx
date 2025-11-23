import { render, screen } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('renders children correctly', () => {
    render(
      <Header>
        <div>Test Child</div>
      </Header>,
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders with correct styles', () => {
    render(
      <Header>
        <div>Content</div>
      </Header>,
    );

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('h-14');
    expect(headerElement).toHaveClass('absolute');
  });
});
