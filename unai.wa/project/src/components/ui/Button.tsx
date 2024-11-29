import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = "rounded-full font-semibold transition-all";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90",
    secondary: "bg-white/10 hover:bg-white/20 text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;