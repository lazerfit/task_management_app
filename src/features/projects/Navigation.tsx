import { useState } from 'react';

const Navigation = () => {
  const [selectedOption, setSelectedOption] = useState('all');

  const options = [
    { label: 'All', value: 'all' },
    { label: 'In progress', value: 'in-progress' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="flex gap-5 border">
      {options.map((option) => (
        <button
          key={option.value}
          className={`cursor-pointer rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 ${
            selectedOption === option.value ? 'bg-gray-100' : ''
          }`}
          onClick={() => setSelectedOption(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
