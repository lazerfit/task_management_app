import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Layout', () => {
  it('renders outlet content and footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Outlet Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Outlet Content')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument(); // Footer renders a nav
  });
});
