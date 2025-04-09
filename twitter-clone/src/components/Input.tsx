import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

export default function Input({
  value,
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  ...restProps
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`rounded-md ${className}`}
      disabled={disabled}
      {...restProps}
    />
  );
}
