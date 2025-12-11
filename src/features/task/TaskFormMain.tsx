import MainContent from '@/components/template/MainContent';
import type { Status, Priority } from './types/taskTypes';
import { useState } from 'react';
import { useCreateTask } from './hooks/useTaskQueries';
import FormSelect from './components/FormSelect';
import Input from '@/components/common/Input';
import SubmitButton from '@/components/common/SubmitButton';

interface SelectOption {
  label: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
}

const TaskFormMain = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status>('TODO');
  const [priority, setPriority] = useState<Priority>('MEDIUM');
  const [startDate, setStartDate] = useState<string>('Today');
  const [dueDate, setDueDate] = useState<string>('Tomorrow');
  const [assignee, setAssignee] = useState<string>('Me');

  const { mutate: createTask } = useCreateTask();

  const selectOptions: SelectOption[] = [
    {
      label: 'Status',
      items: ['TODO', 'IN_PROGRESS', 'COMPLETE', 'CANCELED'],
      value: status,
      onChange: (value) => setStatus(value as Status),
    },
    {
      label: 'Priority',
      items: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'],
      value: priority,
      onChange: (value) => setPriority(value as Priority),
    },
    {
      label: 'Start Date',
      items: ['Today', 'Tomorrow', 'Next Week'],
      value: startDate,
      onChange: setStartDate,
    },
    {
      label: 'Due Date',
      items: ['Today', 'Tomorrow', 'Next Week'],
      value: dueDate,
      onChange: setDueDate,
    },
    {
      label: 'Assignee',
      items: ['Me', 'Team Member 1', 'Team Member 2'],
      value: assignee,
      onChange: setAssignee,
    },
  ];

  const getDateFromSelection = (selection: string): Date => {
    const date = new Date();
    if (selection === 'Tomorrow') {
      date.setDate(date.getDate() + 1);
    } else if (selection === 'Next Week') {
      date.setDate(date.getDate() + 7);
    }
    return date;
  };

  const handleSave = () => {
    createTask({
      request: {
        projectId: 1, // Placeholder
        name,
        status,
        priority,
        dueDate: getDateFromSelection(dueDate),
      },
    });
  };

  return (
    <MainContent className="gap-3">
      <h1 className="text-2xl font-bold">Task Management App</h1>
      <div className="mt-6 flex flex-col gap-5">
        <Input
          label="Task Name"
          value={name}
          placeholder="Enter task name"
          onChange={setName}
        />
        {selectOptions.map((option) => (
          <FormSelect
            label={option.label}
            value={option.value}
            items={option.items}
            onChange={option.onChange}
          />
        ))}
        <SubmitButton onClick={handleSave} label="Save Task" />
      </div>
    </MainContent>
  );
};

export default TaskFormMain;
