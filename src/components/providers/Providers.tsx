import { ActiveSectionProvider } from '@/context/ActiveSectionContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = async ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </ThemeProvider>
  );
};

export default Providers;
