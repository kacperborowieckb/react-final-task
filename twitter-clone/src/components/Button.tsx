import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  className = '',
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={`rounded-md border w-fit border-gray-950 px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
}
