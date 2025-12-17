interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  label?: string;
}

const Input = ({ value, placeholder, onChange, label }: InputProps) => {
  return (
    <div className="m-2 flex flex-col gap-2">
      {label && (
        <label
          htmlFor="project-name"
          className="text-sm leading-none font-medium"
        >
          {label}
        </label>
      )}
      <input
        id="project-name"
        type="text"
        className="rounded-md border p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
