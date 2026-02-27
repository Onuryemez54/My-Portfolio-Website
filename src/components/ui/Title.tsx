'use client';
import { TitleKey } from '@/types/i18n/keys';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { HTMLAttributes } from 'react';
import { TypeAnimation } from 'react-type-animation';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'small';
type i18nKey = TitleKey;

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: Variant;
  className?: string;
  i18nKey: i18nKey;
  underline?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'text-primary-200 font-body text-center text-xl  font-extrabold sm:text-2xl md:text-left md:text-3xl lg:text-4xl 2xl:text-5xl',
  secondary:
    'text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-accent-400 font-heading font-semibold mb-4 sm:mb-6  lg:mb-7 xl:mb-8',
  tertiary: 'sm:text-xl md:text-2xl text-accent-400',
  small: 'text-sm sm:text-base lg:text-lg  text-primary-200 font-semibold ',
};

const baseClass = 'leading-tight tracking-tight capitalize';

export const Title = ({ variant, className, i18nKey, underline }: TitleProps) => {
  const t = useTranslations(TitleKey.TITLE);

  if (i18nKey === TitleKey.HERO) {
    return (
      <h1 className={cn(baseClass, variantStyles[variant], className)}>
        {t.rich(i18nKey, {
          highlight: (chunk) => <span className="text-accent-400">{chunk}</span>,
        })}
      </h1>
    );
  }

  if (i18nKey === TitleKey.HERO_TECH_STACK) {
    const techStacks = t.raw(i18nKey) as string[];
    return (
      <h1 className={cn(baseClass, variantStyles[variant], className)}>
        <span className="text-primary-200 block leading-tight">
          <span className="inline-block w-full text-center md:text-left lg:w-[28ch]">
            <TypeAnimation
              sequence={[
                techStacks[0],
                1200,
                techStacks[1],
                1200,
                techStacks[2],
                1200,
                techStacks[3],
                1200,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </span>
        </span>
      </h1>
    );
  }

  return (
    <h2
      className={cn(
        baseClass,
        variantStyles[variant],
        className,
        underline && 'decoration-accent-400 underline decoration-4 underline-offset-4'
      )}
    >
      {t(i18nKey)}
    </h2>
  );
};
