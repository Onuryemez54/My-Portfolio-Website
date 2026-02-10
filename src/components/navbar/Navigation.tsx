'use client';
import { ThemeToggleButton } from './ThemeToggleButton';
import { DesktopNavigation } from './DesktopNavigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { MobileNavigation } from './MobileNavigation ';

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-1 sm:gap-2 lg:gap-8">
      <DesktopNavigation />
      <div className="flex items-center sm:gap-1 lg:gap-2">
        <LocaleSwitcher />
        <ThemeToggleButton />
      </div>
      <MobileNavigation />
    </nav>
  );
};
