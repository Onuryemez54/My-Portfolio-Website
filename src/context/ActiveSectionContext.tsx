'use client';
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { SectionKey } from '@/types/section';
import { usePathname } from 'next/navigation';

type ActiveSectionContextType = {
  active: SectionKey;
  registerSection: (id: SectionKey) => (el: HTMLElement | null) => void;
  scrollTo: (id: SectionKey) => void;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const HEADER_OFFSET = 96;

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [active, setActive] = useState<SectionKey>(SectionKey.HOME);

  const sectionRefs = useRef<Record<SectionKey, HTMLElement | null>>({
    [SectionKey.HOME]: null,
    [SectionKey.ABOUT]: null,
    [SectionKey.PROJECTS]: null,
    [SectionKey.CONTACT]: null,
  });

  const registerSection = (id: SectionKey) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id: SectionKey) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (!visible.length) return;

        setActive(visible[0].target.id as SectionKey);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <ActiveSectionContext.Provider value={{ active, registerSection, scrollTo }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSectionContext() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) {
    throw new Error('useActiveSectionContext must be used inside ActiveSectionProvider');
  }
  return ctx;
}
