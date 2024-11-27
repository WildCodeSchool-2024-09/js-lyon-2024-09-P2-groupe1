import type React from "react";

interface inputProps {
  type: "text" | "password";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  required: boolean;
}

function Input({
  type,
  value,
  onChange,
  id,
  required,
  placeholder,
}: inputProps) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}
export default Input;
