import { render, screen, fireEvent } from '@testing-library/react';
import SettingMain from './SettingMain';
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

describe('SettingMain', () => {
  it('renders theme option', () => {
    render(
      <MemoryRouter>
        <SettingMain />
      </MemoryRouter>,
    );
    expect(screen.getByText('Theme')).toBeInTheDocument();
  });

  it('navigates to theme page on click', () => {
    render(
      <MemoryRouter>
        <SettingMain />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText('Theme'));
    expect(mockNavigate).toHaveBeenCalledWith('/setting/theme');
  });
});
