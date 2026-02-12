import { Inter, Playfair_Display } from 'next/font/google';
import { useLocale } from 'next-intl';
import { ReactNode } from 'react';
import Providers from '@/components/providers/Providers';
import { ScrollToTopButton } from '@/components/common/animations/ScrollToTopButton';
import { CursorProvider } from '@/components/providers/CursorProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background overflow-x-hidden">
        <CursorProvider />
        <Providers>{children}</Providers>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
