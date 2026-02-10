import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import '@/app/globals.css';
import { Metadata } from 'next';
import { getValidatedLocale } from '@/i18n/server';
import { TitleKey } from '@/types/i18n/keys';
import { routing } from '@/i18n/routing';
import { ToastProvider } from '@/context/ToastContext';
import { NavbarSection } from '@/components/navbar/NavbarSection';
import { Footer } from '@/components/footer/Footer';

interface MetadataProps {
  params: Promise<{
    locale: string;
  }>;
}

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const locale = await getValidatedLocale(params);

  const t = await getTranslations({
    locale,
    namespace: TitleKey.TITLE,
  });

  return {
    title: {
      template: `%s / ${t(TitleKey.BRAND)}`,
      default: `${t(TitleKey.GREETING)} / ${t(TitleKey.BRAND)}`,
    },
    description:
      'Discover my portfolio showcasing my projects, skills, and experience as a software developer. Explore my work and get in touch to collaborate on exciting opportunities.',
  };
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const LocaleLayout = async ({ children, params }: LayoutProps) => {
  const locale = await getValidatedLocale(params);

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ToastProvider>
        <div className="from-primary-900 via-primary-700 to-primary-600 text-primary-50 relative mx-auto flex min-h-svh max-w-480 flex-col overflow-x-hidden bg-linear-to-b">
          <NavbarSection />

          <main className="flex-1 overflow-y-auto">{children}</main>

          <Footer />
        </div>
      </ToastProvider>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
