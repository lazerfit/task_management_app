import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SubmitButtonProps {
  label: string;
  enabled?: boolean;
  onClick: () => void;
}

const SubmitButton = ({
  label,
  enabled = false,
  onClick,
}: SubmitButtonProps) => {
  return (
    <button
      className={twMerge(
        clsx(
          'm-2 cursor-pointer rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600',
          'disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50',
        ),
      )}
      onClick={onClick}
      disabled={!enabled}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
