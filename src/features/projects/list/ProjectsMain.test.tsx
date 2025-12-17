import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import customRender from '@/test/render/customRender';
import ProjectsMain from './ProjectsMain';
import { createRoutesStub } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';

describe('ProjectsMain.test', () => {
  const Stub = createRoutesStub([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '/projects',
          Component: ProjectsMain,
        },
      ],
    },
  ]);
  beforeEach(() => {
    customRender(<Stub initialEntries={['/projects']} />);
  });

  it('프로젝트가 렌더링되어야 한다.', async () => {
    const project = await screen.findByText('test_project');
    const project2 = await screen.findByText('test_project2');

    expect(project).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
  });
});
