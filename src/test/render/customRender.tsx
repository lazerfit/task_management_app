import type { ReactElement } from 'react';
import { queryWrapper } from '../queryWrapper';
import { render, type RenderOptions } from '@testing-library/react';

const QueryProvider = queryWrapper();

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
