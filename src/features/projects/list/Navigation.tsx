import type { ProjectStatus } from '../types/projectTypes';

interface NavigationProps {
  filter: ProjectStatus;
  onChange: (value: ProjectStatus) => void;
}

interface Options {
  label: string;
  value: ProjectStatus;
}

const Navigation = ({ filter, onChange }: NavigationProps) => {
  const options: Options[] = [
    { label: 'All', value: '' },
    { label: 'To do', value: 'TODO' },
    { label: 'In progress', value: 'IN_PROGRESS' },
    { label: 'Done', value: 'DONE' },
  ];

  return (
    <div className="flex gap-5 border">
      {options.map((option) => (
        <button
          key={option.value}
          className={`cursor-pointer rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 ${
            filter === option.value ? 'bg-gray-100' : ''
          }`}
          onClick={() => onChange(option.value as ProjectStatus)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
