import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type AnimatedNavButtonProps = {
  label: ReactNode;
  isActive: boolean;
  onClick?: () => void;
  size?: 'tab' | 'nav';
  className?: string;
};

export const AnimatedNavButton = ({
  label,
  isActive,
  onClick,
  size = 'nav',
  className,
}: AnimatedNavButtonProps) => {
  const sizeStyles =
    size === 'tab'
      ? 'text-sm md:text-base 2xl:text-lg p-0.5'
      : 'text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[22px] p-0.5';

  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative font-semibold transition-all duration-300',
        sizeStyles,
        isActive ? 'text-nav-active-foreground' : 'text-nav-foreground',
        className
      )}
    >
      <span
        className={cn(
          'inline-block transition-transform duration-300',
          !isActive && 'group-hover:-translate-y-1'
        )}
      >
        {label}
      </span>

      <span
        className={cn(
          'bg-nav-active-foreground absolute -bottom-1 left-0 h-0.5 w-0 transition-[width] duration-300',
          isActive && 'w-full',
          !isActive && 'group-hover:w-full'
        )}
      />
    </button>
  );
};
