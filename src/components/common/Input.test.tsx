import { render, screen, fireEvent } from '@testing-library/react'; // Keep fireEvent
import { describe, it, expect, vi } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('renders with provided value and placeholder', () => {
    const handleChange = vi.fn();
    render(
      <Input
        value="Test Value"
        placeholder="Enter text"
        onChange={handleChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(
      'Enter text',
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('Test Value');
  });

  it('calls onChange with the correct value when input changes', () => {
    const handleChange = vi.fn();
    let currentValue = ''; // Simulate parent's state
    const { rerender } = render(
      <Input
        value={currentValue}
        placeholder="Enter text"
        onChange={(newValue) => {
          currentValue = newValue; // Update simulated state
          handleChange(newValue);
          rerender(
            // Re-render with new value
            <Input
              value={currentValue}
              placeholder="Enter text"
              onChange={(v) => {
                currentValue = v;
                handleChange(v);
              }}
            />,
          );
        }}
      />,
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    const newValue = 'Test Input';

    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(handleChange).toHaveBeenCalledTimes(1); // fireEvent.change calls once
    expect(handleChange).toHaveBeenCalledWith(newValue);
    expect(inputElement).toHaveValue(newValue); // Should reflect the rerendered value
  });

  it('renders the provided label', () => {
    const handleChange = vi.fn();
    render(
      <Input
        value=""
        placeholder="Enter text"
        onChange={handleChange}
        label="My Label"
      />,
    );

    expect(screen.getByText('My Label')).toBeInTheDocument();
  });

  it('does not render a label if no label prop is provided', () => {
    const handleChange = vi.fn();
    render(<Input value="" placeholder="Enter text" onChange={handleChange} />);

    expect(screen.queryByText('My Label')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('My Label')).not.toBeInTheDocument();
  });
});
