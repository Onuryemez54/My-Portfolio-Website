'use client';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/shadcn/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/select';
import { useTranslations } from 'next-intl';
import { TranslatedFormMessage } from '../TranslatedFormMessage';
import { cn } from '@/utils/cn';
import { inputClasses, errorInputClasses } from '@/constants/formStyles';
import { FormKey } from '@/types/i18n/keys';
import { ChevronDown } from 'lucide-react';

type Option = {
  label: string;
  value: string;
};

interface SelectFieldProps {
  name: string;
  labelKey: FormKey;
  options: Option[];
  disabled?: boolean;
  testId?: string;
}

export const SelectField = ({
  name,
  labelKey,
  options,
  disabled = false,
  testId,
}: SelectFieldProps) => {
  const tField = useTranslations('FORM.FIELD');
  const tPlaceholder = useTranslations('FORM.PLACEHOLDER');

  return (
    <FormField
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="text-primary-200">{tField(labelKey)}</FormLabel>

          <FormControl>
            <Select value={field.value ?? ''} onValueChange={field.onChange} disabled={disabled}>
              <SelectTrigger
                className={cn(inputClasses, fieldState.error && errorInputClasses)}
                data-testid={testId}
              >
                <SelectValue placeholder={tPlaceholder(labelKey) as string} />
                <ChevronDown
                  className={cn(
                    'h-4 w-4 opacity-60 transition-transform duration-300 ease-in-out',
                    'group-data-[state=open]:rotate-180'
                  )}
                />
              </SelectTrigger>

              <SelectContent className="bg-primary-700 border-primary-500 text-primary-200 max-h-75 overflow-y-auto rounded-2xl border">
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>

          <TranslatedFormMessage />
        </FormItem>
      )}
    />
  );
};
