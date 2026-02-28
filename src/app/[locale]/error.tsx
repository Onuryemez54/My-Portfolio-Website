'use client';

import { FadeUp } from '@/components/common/animations/FadeUp';
import { Button } from '@/components/ui/Button';
import { ButtonKey, ErrorKey } from '@/types/i18n/keys';
import { Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Error = ({ error }: { error: Error }) => {
  const router = useRouter();
  const t = useTranslations(ErrorKey.TITLE);

  const errorKey = Object.values(ErrorKey).includes(error.message as ErrorKey)
    ? (error.message as ErrorKey)
    : ErrorKey.UNKNOWN;

  const status = 500;

  const handleReset = () => {
    router.push('/');
  };

  return (
    <div className="bg-primary-900 flex min-h-screen items-center justify-center">
      <FadeUp>
        <main className="flex min-h-[50vh] w-full flex-col items-center justify-start gap-4 p-16 lg:gap-8">
          <h1 className="text-accent-500 font-heading text-center text-xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
            {status}
          </h1>

          <h3 className="font-heading text-primary-200 animate-pulse text-center text-sm font-semibold tracking-wide sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl">
            {t(errorKey)}
          </h3>

          <Button
            variant="secondary"
            onAction={handleReset}
            i18nKey={ButtonKey.BACK_HOME}
            className="font-heading"
            icon={<Home size={16} />}
          />
        </main>
      </FadeUp>
    </div>
  );
};

export default Error;
