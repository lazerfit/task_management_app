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
          className={`py-2 px-4 border rounded-xl text-sm cursor-pointer hover:bg-gray-100 ${
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
