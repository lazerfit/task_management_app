import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormSelectProps {
  label: string;
  value: string;
  items: string[];
  onChange: (value: string) => void;
}

const FormSelect = ({ label, value, items, onChange }: FormSelectProps) => {
  return (
    <div
      key={label}
      className="flex h-12 items-center justify-start gap-5 rounded-xl border p-3"
    >
      <div className="w-20">{label}</div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-10 w-50 border-none shadow-none">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
