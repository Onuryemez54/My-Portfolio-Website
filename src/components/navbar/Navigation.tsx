'use client';
import { ThemeToggleButton } from './ThemeToggleButton';
import { DesktopNavigation } from './DesktopNavigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { MobileNavigation } from './MobileNavigation';

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-0.5 sm:gap-1 md:gap-8 lg:gap-10 2xl:gap-14">
      <DesktopNavigation />
      <div className="animate-in zoom-in flex items-center gap-1 duration-300">
        <LocaleSwitcher />
        <ThemeToggleButton />
      </div>
      <MobileNavigation />
    </nav>
  );
};
