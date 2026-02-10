'use client';
import { SubTitleKey } from '@/types/i18n/keys';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { HTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';

type i18nKey = SubTitleKey;

interface SubTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: Variant;
  children?: ReactNode;
  className?: string;
  i18nKey: i18nKey;
  values?: Record<string, string | number>;
}

const variantStyles: Record<Variant, string> = {
  primary: 'text-primary-300 mt-4 mb-8 max-w-xl text-center text-base sm:text-lg md:text-left',
  secondary: 'text-sm sm:text-lg text-primary-200',
  tertiary: 'text-center text-primary-200/80 mb-4 text-sm sm:text-base lg:text-lg',
};

const baseClass = 'font-light font-body leading-relaxed';

export const SubTitle = ({ variant, className, i18nKey, values }: SubTitleProps) => {
  const t = useTranslations(SubTitleKey.TITLE);

  return <p className={cn(baseClass, variantStyles[variant], className)}>{t(i18nKey)}</p>;
};
