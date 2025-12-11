import MainContent from '@/components/template/MainContent';
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
        <h1 className="mb-6 text-xl font-bold">Theme Settings</h1>
      </div>
      <RadioGroup defaultValue="light">
        {radioOptions.map((option) => (
          <div
            className="flex h-12 w-full items-center justify-between gap-3 rounded-xl border p-5"
            key={option.id}
          >
            <Label className="w-13" htmlFor={option.id}>
              {option.label}
            </Label>
            <RadioGroupItem
              className="h-5 w-5"
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
