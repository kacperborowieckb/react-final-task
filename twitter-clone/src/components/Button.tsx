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
  type = 'button',
  disabled = false,
  className = '',
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={`rounded-md ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
}
