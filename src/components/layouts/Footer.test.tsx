import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Footer', () => {
  it('renders navigation buttons', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText('Home')).toBeInTheDocument();
    expect(screen.getByLabelText('Calendar')).toBeInTheDocument();
    expect(screen.getByLabelText('Add New')).toBeInTheDocument();
    expect(screen.getByLabelText('Folders')).toBeInTheDocument();
    expect(screen.getByLabelText('Profile')).toBeInTheDocument();
  });

  it('navigates to home when home button is clicked', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByLabelText('Home'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('navigates to add task when add button is clicked', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByLabelText('Add New'));
    expect(mockNavigate).toHaveBeenCalledWith('/tasks/new');
  });
});
