'use client';
import { useFormField } from '@/components/ui/shadcn/form';
import { useTranslations } from 'next-intl';
import { ErrorKey } from '@/types/i18n/keys';
import { cn } from '@/utils/cn';

const baseErrorClass =
  'text-xs sm:text-sm text-left text-toast-error-foreground mt-1 font-semibold font-body';

export const TranslatedFormMessage = () => {
  const { error } = useFormField();
  const t = useTranslations(ErrorKey.TITLE);

  if (!error?.message) return null;

  return (
    <p role="alert" className={cn(baseErrorClass)}>
      {t(error.message as ErrorKey)}
    </p>
  );
};
