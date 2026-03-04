'use client';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/shadcn/form';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { useTranslations } from 'next-intl';
import { TranslatedFormMessage } from '../TranslatedFormMessage';
import { FormKey } from '@/types/i18n/keys';
import { cn } from '@/utils/cn';
import { textareaClasses } from '@/constants/formStyles';

interface TextareaFieldProps {
  name: string;
  labelKey: FormKey;
  placeholderKey?: FormKey;
  rows?: number;
  disabled?: boolean;
  testId?: string;
}

export const TextareaField = ({
  name,
  labelKey,
  placeholderKey,
  rows = 4,
  disabled = false,
  testId,
}: TextareaFieldProps) => {
  const tField = useTranslations('FORM.FIELD');
  const tPlaceholder = useTranslations('FORM.PLACEHOLDER');

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-primary-200">{tField(labelKey)}</FormLabel>

          <FormControl>
            <Textarea
              data-testid={testId}
              {...field}
              rows={rows}
              disabled={disabled}
              value={field.value ?? ''}
              placeholder={placeholderKey ? tPlaceholder(placeholderKey) : undefined}
              className={cn(textareaClasses, disabled && 'cursor-not-allowed opacity-60')}
            />
          </FormControl>

          <TranslatedFormMessage />
        </FormItem>
      )}
    />
  );
};
