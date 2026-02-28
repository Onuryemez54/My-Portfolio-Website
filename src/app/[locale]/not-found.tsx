'use client';
import { FadeUp } from '@/components/common/animations/FadeUp';
import { Button } from '@/components/ui/Button';
import { SubTitle } from '@/components/ui/SubTitle';
import { Title } from '@/components/ui/Title';
import { ButtonKey, SubTitleKey, TitleKey } from '@/types/i18n/keys';
import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  const router = useRouter();

  const handleReset = () => {
    router.push('/');
  };
  return (
    <div className="bg-primary-900 flex min-h-screen items-center justify-center">
      <FadeUp>
        <div className="flex flex-col items-center gap-4 px-4 py-24 text-center">
          <h1 className="text-accent-400 text-3xl font-extrabold tracking-wide sm:text-5xl md:text-6xl">
            404
          </h1>

          <Title variant="primary" className="text-primary-100" i18nKey={TitleKey.NOT_FOUND} />

          <SubTitle variant="primary" i18nKey={SubTitleKey.NOT_FOUND} />

          <Button
            variant="secondary"
            onAction={handleReset}
            className="mt-6 gap-3"
            i18nKey={ButtonKey.BACK_HOME}
            icon={<Home size={16} />}
          />
        </div>
      </FadeUp>
    </div>
  );
};

export default NotFoundPage;
