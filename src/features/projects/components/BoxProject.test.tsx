import customRender from '@/test/render/customRender';
import { screen } from '@testing-library/react';
import BoxProject from './BoxProject';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('BoxProject', () => {
  it('renders project name', () => {
    const projectName = 'Test Project';
    customRender(
      <MemoryRouter>
        <BoxProject name={projectName} navigateTo={1} status="TODO" />
      </MemoryRouter>,
    );

    expect(screen.getByText(projectName)).toBeInTheDocument();
  });
});
