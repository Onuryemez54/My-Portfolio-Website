import { cn } from '@/utils/cn';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider = ({ direction = 'horizontal', className }: DividerProps) => {
  return (
    <div
      className={cn(
        'border-border/30',
        direction === 'vertical'
          ? 'mx-auto h-full w-px border-l md:py-6 lg:py-10'
          : 'm-0 w-full border-t md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-14',
        className
      )}
    />
  );
};
