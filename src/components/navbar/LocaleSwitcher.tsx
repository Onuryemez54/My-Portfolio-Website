'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/shadcn/select';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
];

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: string) => {
    if (nextLocale === locale) return;

    router.replace(pathname, { locale: nextLocale });
    router.refresh();
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className={cn(
          'group h-8 min-w-13 px-2 text-xs',
          'sm:h-9 sm:min-w-15 sm:px-3 sm:text-sm',
          'md:h-10 md:min-w-17 md:px-4 md:text-base',
          'border-primary-700/60 rounded-full border',
          'bg-primary-900/40 backdrop-blur-sm',
          'text-nav-foreground font-semibold tracking-wide',
          'transition-all duration-300',
          'hover:border-accent-500/80 hover:bg-primary-800/50',
          'data-[state=open]:border-primary-400 data-[state=open]:bg-primary-800/60',
          'focus:ring-0 focus:outline-none',
          'focus-visible:ring-0 focus-visible:outline-none'
        )}
      >
        <SelectValue />
        <ChevronDown
          className={cn(
            'h-4 w-4 opacity-60 transition-transform duration-300 ease-in-out',
            'group-data-[state=open]:rotate-180'
          )}
        />
      </SelectTrigger>

      <SelectContent
        className={cn(
          'border-primary-700/40 rounded-xl border',
          'bg-primary-900/95 backdrop-blur-md',
          'min-w-15'
        )}
      >
        {LOCALES.map((l) => {
          const isActive = locale === l.code;

          return (
            <SelectItem
              key={l.code}
              value={l.code}
              className={cn(
                'text-xs font-semibold sm:text-sm md:text-base',
                'transition-colors',

                isActive ? 'text-nav-active-foreground' : 'text-nav-foreground'
              )}
            >
              {l.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
