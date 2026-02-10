'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/shadcn/select';
import { cn } from '@/utils/cn';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
];

export function LocaleSwitcher() {
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
          'group relative h-9 min-w-15 rounded-full px-3',
          'border-primary-700/60 border',
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
      </SelectTrigger>

      <SelectContent
        className={cn(
          'border-primary-700/40 min-w-14 rounded-xl border',
          'bg-primary-900/95 backdrop-blur-md'
        )}
      >
        {LOCALES.map((l) => {
          const isActive = locale === l.code;

          return (
            <SelectItem
              key={l.code}
              value={l.code}
              className={cn(
                'cursor-pointer text-sm font-semibold transition-colors',
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
}
