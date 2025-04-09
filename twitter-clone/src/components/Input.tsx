import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  hasError: boolean;
};

export default function Input({
  value,
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  hasError = false,
  ...restProps
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`rounded-md border min-w-64 border-gray-900 px-4 py-2 ${
        hasError ? 'border-red-500' : ''
      } ${className}`.trim()}
      disabled={disabled}
      {...restProps}
    />
  );
}
