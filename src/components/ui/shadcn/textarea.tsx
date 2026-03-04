import * as React from 'react';

import { cn } from '@/utils/cn';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input focus-visible:border-ring focus-visible:ring-ring/50 disabled:bg-input/50 dark:disabled:bg-input/80 placeholder:text-muted-foreground aria-invalid:border-toast-error-border aria-invalid:ring-toast-error-border dark:aria-invalid:border-toast-error-border dark:aria-invalid:ring-toast-error-border flex field-sizing-content min-h-16 w-full rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 md:text-sm',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
