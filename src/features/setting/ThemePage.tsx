import MainContent from '@/components/ui/template/MainContent';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const ThemePage = () => {
  const radioOptions = [
    {
      id: 'theme-setting-light',
      value: 'light',
      label: 'Light',
    },
    {
      id: 'theme-setting-dark',
      value: 'dark',
      label: 'Dark',
    },
    {
      id: 'theme-setting-system',
      value: 'system',
      label: 'System',
    },
  ];

  return (
    <MainContent>
      <div>
        <h1 className="text-xl font-bold mb-6">Theme Settings</h1>
      </div>
      <RadioGroup defaultValue="light">
        {radioOptions.map((option) => (
          <div
            className="w-full h-12 flex items-center justify-between gap-3 p-5 border rounded-xl"
            key={option.id}
          >
            <Label className="w-13" htmlFor={option.id}>
              {option.label}
            </Label>
            <RadioGroupItem
              className="w-5 h-5"
              value={option.value}
              id={option.id}
            />
          </div>
        ))}
      </RadioGroup>
    </MainContent>
  );
};

export default ThemePage;
