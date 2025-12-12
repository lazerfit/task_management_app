import { IconArrowUpRight } from '@tabler/icons-react';

interface TaskBoxProps {
  label: string;
}

const TaskBox = ({ label }: TaskBoxProps) => {
  return (
    <div className="flex h-25 w-49 flex-col items-start justify-start rounded-2xl border px-2.5 py-4">
      <IconArrowUpRight size={20} style={{ marginLeft: 'auto' }} />
      <p>{label}</p>
      <p className="text-xs">10 tasks</p>
    </div>
  );
};

export default TaskBox;
