import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import LandingProjects from './LandingProjects';
import { queryWrapper } from '@/test/queryWrapper';

describe('LandingProject', () => {
  const QueryClient = queryWrapper();
  beforeEach(() => {
    render(
      <QueryClient>
        <LandingProjects />
      </QueryClient>,
    );
  });

  it('프로젝트들이 렌더링 된다.', async () => {
    const project = await screen.findByText('test_project');
    const project2 = await screen.findByText('test_project2');

    expect(project).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
  });
});
