'use client';
import { useTranslations } from 'next-intl';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonKey } from '@/types/i18n/keys';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'submit';
type Size = 'sm' | 'md' | 'lg';
type As = 'button' | 'li' | 'link';

type BaseProps = {
  as?: As;
  href?: string;
  size?: Size;
  download?: boolean;
  variant: Variant;
  i18nKey: ButtonKey;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onAction?: () => void;
  icon?: ReactNode;
  testId?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-300  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 disabled:cursor-not-allowed disabled:opacity-60';

const sizeStyles: Record<Size, string> = {
  sm: `
    px-3 py-1.5 text-xs
    sm:px-4 sm:py-2 sm:text-xs
    md:px-5 md:py-2.5 md:text-sm
  `,

  md: `
    px-4 py-2 text-xs
    sm:px-5 sm:py-2.5 sm:text-sm
    md:px-6 md:py-3 md:text-sm
  `,

  lg: `
    px-5 py-2.5 text-sm
    sm:px-6 sm:py-3 sm:text-sm
    md:px-8 md:py-4 md:text-base
  `,
};

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary-700 text-primary-300 hover:bg-primary-300 hover:text-primary-700 hover:translate-y-2 border border-primary-600',

  secondary:
    'border border-btn-secondary-border text-btn-secondary-foreground hover:border-btn-secondary-hover-border hover:text-btn-secondary-hover-foreground',

  tertiary: 'border border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-accent-700',

  submit:
    'w-full rounded-lg border border-primary-500 text-primary-100 hover:bg-primary-500 hover:text-white md:text-lg',
};

export const Button = ({
  as = 'button',
  href,
  download = false,
  size = 'md',
  variant,
  i18nKey,
  className,
  disabled,
  isLoading,
  onAction,
  icon,
  testId,
  type = 'button',
  ...rest
}: ButtonProps) => {
  const t = useTranslations(ButtonKey.TITLE);

  const classes = cn(baseClass, sizeStyles[size], variantStyles[variant], className);

  const isBusy = isLoading;

  const label = isBusy
    ? i18nKey === ButtonKey.SEND_FEEDBACK
      ? t(ButtonKey.SENDING)
      : t(i18nKey)
    : t(i18nKey);

  const handleClick = () => {
    if (disabled || isBusy) return;
    onAction?.();
  };

  if (as === 'link' && href) {
    if (download) {
      return (
        <a
          href={typeof href === 'string' ? href : undefined}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={testId}
          className={classes}
        >
          <span>{label}</span>
        </a>
      );
    }
  }

  if (as === 'li') {
    return (
      <li data-testid={testId} className={classes}>
        {icon}
        <span>{label}</span>
      </li>
    );
  }

  return (
    <button
      {...rest}
      data-testid={testId}
      type={type}
      disabled={disabled || isBusy}
      onClick={handleClick}
      className={classes}
    >
      {icon}
      {isBusy && <Loader2 className="h-5 w-5 animate-spin" />}
      <span>{label}</span>
    </button>
  );
};
