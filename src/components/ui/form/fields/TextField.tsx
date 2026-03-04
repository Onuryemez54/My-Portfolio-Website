'use client';
import { useTranslations } from 'next-intl';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/shadcn/form';
import { Input } from '@/components/ui/shadcn/input';
import { FormKey } from '@/types/i18n/keys';
import { TranslatedFormMessage } from '../TranslatedFormMessage';
import { inputClasses } from '@/constants/formStyles';

interface TextFieldProps {
  name: string;
  type?: 'text' | 'email';
  labelKey: FormKey;

  disabled?: boolean;
  autoComplete?: string;
  readOnly?: boolean;
  testId?: string;
}

export const TextField = ({
  name,
  type = 'text',
  labelKey,
  disabled = false,
  autoComplete,
  readOnly = false,
  testId,
}: TextFieldProps) => {
  const tField = useTranslations('FORM.FIELD');
  const tPlaceholder = useTranslations('FORM.PLACEHOLDER');

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-primary-200">{tField(labelKey)}</FormLabel>
          <FormControl>
            <Input
              {...field}
              autoComplete={autoComplete}
              placeholder={tPlaceholder(labelKey)}
              value={field.value ?? ''}
              type={type}
              disabled={disabled}
              className={inputClasses}
              readOnly={readOnly}
              data-testid={testId}
            />
          </FormControl>
          <TranslatedFormMessage />
        </FormItem>
      )}
    />
  );
};
