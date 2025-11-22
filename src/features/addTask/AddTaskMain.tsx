import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AddTaskMain = () => {
  const selectOptions = [
    {
      label: 'Status',
      items: ['Todo', 'In progress', 'Completed', 'Canceled'],
    },
    {
      label: 'Priority',
      items: ['Low', 'Medium', 'High', 'Urgent'],
    },
    {
      label: 'Start Date',
      items: ['Today', 'Tomorrow', 'Next Week'],
    },
    {
      label: 'Due Date',
      items: ['Today', 'Tomorrow', 'Next Week'],
    },
    {
      label: 'Assignee',
      items: ['Me', 'Team Member 1', 'Team Member 2'],
    },
  ];

  return (
    <div className="mt-20 border w-full h-full flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Task Management App</h1>
      <div className="flex flex-col gap-5 mt-6">
        {selectOptions.map((option) => (
          <div className="flex items-center justify-start gap-5 border h-12 p-3 rounded-xl">
            <div className="w-20">{option.label}</div>
            <Select key={option.label}>
              <SelectTrigger className="h-10 w-50 border-none shadow-none">
                <SelectValue placeholder={option.label} />
              </SelectTrigger>
              <SelectContent>
                {option.items.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTaskMain;
