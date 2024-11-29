import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover';
}

const Card = ({ className, variant = 'default', ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/5 backdrop-blur-sm border border-white/10",
        variant === 'hover' && "transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10",
        className
      )}
      {...props}
    />
  );
};

Card.Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("p-6 border-b border-white/10", className)}
    {...props}
  />
);

Card.Content = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6", className)} {...props} />
);

Card.Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("p-6 border-t border-white/10", className)}
    {...props}
  />
);

export default Card;