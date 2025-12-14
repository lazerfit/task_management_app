import { describe, it, expect } from 'vitest';
import ProjectFormMain from './ProjectFormMain';
import { render } from '@/test/render/customRender';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRoutesStub } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import { server } from '@/test/restHandlers/server';
import { http, HttpResponse } from 'msw';

describe('ProjectFromMain', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: Layout,
        children: [{ path: '/', Component: ProjectFormMain }],
      },
    ]);
    render(<Stub initialEntries={['/']} />);
  });

  it('Input과 SubmitButton이 렌더링 된다.', () => {
    const button = screen.getByRole('button', { name: /Save Project/i });
    const input = screen.getByRole('textbox', { name: /Project Name/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Input에 글자를 입력하면 화면에 나타난다.', async () => {
    const input = screen.getByRole('textbox', { name: /Project Name/i });

    await user.type(input, 'test123');

    await waitFor(() => expect(input).toHaveValue('test123'));
  });

  it('submitButton은 기본적으로 disabled 상태이다.', () => {
    const button = screen.getByRole('button', { name: /Save Project/i });

    expect(button).toBeDisabled();
  });

  it('input 입력하면 submitButton  enabled된다.', async () => {
    const button = screen.getByRole('button', { name: /Save Project/i });
    const input = screen.getByRole('textbox', { name: /Project Name/i });

    await user.type(input, 'test123');

    await waitFor(() => expect(button).not.toBeDisabled());
  });

  it('submitButton 클릭 후에 toast가 렌더링된다.', async () => {
    const button = screen.getByRole('button', { name: /Save Project/i });
    const input = screen.getByRole('textbox', { name: /Project Name/i });

    await user.type(input, 'test123');
    await waitFor(() => expect(button).not.toBeDisabled());
    await user.click(button);

    expect(
      await screen.findByText('프로젝트가 생성되었습니다.'),
    ).toBeInTheDocument();
  });

  it('submitButton 클릭 후 error 발생 시 에러 toast가 렌더링된다.', async () => {
    server.use(
      http.post('http://localhost:8080/api/v1/project', () => {
        return new HttpResponse(null, { status: 400 });
      }),
    );

    const button = screen.getByRole('button', { name: /Save Project/i });
    const input = screen.getByRole('textbox', { name: /Project Name/i });

    await user.type(input, 'test123');
    await waitFor(() => expect(button).not.toBeDisabled());
    await user.click(button);

    expect(
      await screen.findByText('오류가 발생하였습니다. 다시 시도해주세요.'),
    ).toBeInTheDocument();
  });
});
