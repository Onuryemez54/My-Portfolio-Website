'use client';
import { useEffect, useState } from 'react';
import { MobileSidebarPortal } from './MobileSidebarPortal';
import { Menu } from 'lucide-react';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };

    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="flex md:hidden">
      <button
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="animate-in zoom-in text-nav-foreground hover:text-accent-500 hover:bg-primary-800/40 flex cursor-pointer items-center justify-center rounded-full p-1 transition-all duration-300 hover:scale-105 sm:p-2"
      >
        <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <MobileSidebarPortal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
