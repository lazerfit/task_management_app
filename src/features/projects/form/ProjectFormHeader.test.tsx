import { screen } from '@testing-library/react';
import ProjectFormHeader from './ProjectFormHeader';
import { describe, it, expect } from 'vitest';
import customRender from '@/test/render/customRender';
import { MemoryRouter } from 'react-router-dom';

describe('ProjectFormHeader', () => {
  it('renders header with correct title', () => {
    customRender(
      <MemoryRouter>
        <ProjectFormHeader />
      </MemoryRouter>,
    );
    expect(screen.getByText(/project form/i)).toBeInTheDocument();
  });
});
