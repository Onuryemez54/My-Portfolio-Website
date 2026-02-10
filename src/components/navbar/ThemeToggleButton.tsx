'use client';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        'group relative flex h-9 w-9 items-center justify-center rounded-full',
        'transition-all duration-300',
        'hover:bg-primary-800/40'
      )}
    >
      <span
        className={cn(
          'absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300',
          isDark
            ? 'bg-accent-400/40 group-hover:opacity-100'
            : 'bg-primary-400/40 group-hover:opacity-100'
        )}
      />

      <span
        className={cn(
          'relative z-10 transition-all duration-500',
          isDark ? 'scale-100 rotate-0' : 'scale-90 -rotate-90'
        )}
      >
        {isDark ? (
          <Sun className="text-accent-400 h-5 w-5" />
        ) : (
          <Moon className="text-primary-100 h-5 w-5" />
        )}
      </span>
    </button>
  );
};
