import { render, screen } from '@testing-library/react';
import SettingPage from './SettingPage';
import { describe, it, expect, vi } from 'vitest';

// Mock child components and Outlet
vi.mock('@/features/setting/SettingHeader', () => ({
  default: () => <div data-testid="setting-header">SettingHeader</div>,
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet">Outlet</div>,
  };
});

describe('SettingPage', () => {
  it('renders header and outlet', () => {
    render(<SettingPage />);

    expect(screen.getByTestId('setting-header')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });
});
