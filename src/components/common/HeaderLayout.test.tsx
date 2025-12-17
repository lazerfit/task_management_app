import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import customRender from '@/test/render/customRender';
import CommonHeader from './CommonHeader';
import { createRoutesStub } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';

describe('HeaderLayout.test', () => {
  const Stub = createRoutesStub([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '/header',
          Component: () => <CommonHeader title="TEST" />,
        },
      ],
    },
  ]);
  beforeEach(() => {
    customRender(<Stub initialEntries={['/header']} />);
  });

  it('Header title이 성공적으로 렌더링되어야 한다.', () => {
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('뒤로가기 버튼이 렌더링된다.', () => {
    const button = screen.getByRole('img', { name: /back-button/i });
    expect(button).toBeInTheDocument();
  });
});
