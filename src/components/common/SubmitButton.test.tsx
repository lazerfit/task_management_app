import { render, screen } from '@testing-library/react'; // Keep fireEvent
import { describe, it, expect, vi } from 'vitest';
import SubmitButton from './SubmitButton';
import userEvent from '@testing-library/user-event';

describe('SubmitButton', () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  it('버튼이 렌더링 되어야 한다.', () => {
    render(<SubmitButton label="TEST" enabled={true} onClick={onClick} />);
    const button = screen.getByText(/test/i);

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('버튼이 비활성화 되어야 한다.', () => {
    render(<SubmitButton label="TEST" enabled={false} onClick={onClick} />);
    const button = screen.getByText(/test/i);

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('버튼을 누르면 onClick 함수가 호출되어야 한다.', async () => {
    render(<SubmitButton label="TEST" enabled={true} onClick={onClick} />);
    const button = screen.getByText(/test/i);

    await user.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
