'use client';
import { useMemo, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { NavKey } from '@/types/i18n/keys';
import { SectionKey } from '@/types/section';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

interface NavLinksProps {
  setIsOpen?: (v: boolean) => void;
  renderItem?: (node: ReactNode) => ReactNode;
}

export const NavLinks = ({ setIsOpen, renderItem }: NavLinksProps) => {
  const t = useTranslations(NavKey.TITLE);
  const { active, scrollTo } = useActiveSectionContext();

  const navLinks = useMemo<{ key: SectionKey; label: string }[]>(
    () => [
      { key: SectionKey.HOME, label: t(NavKey.HOME) },
      { key: SectionKey.ABOUT, label: t(NavKey.ABOUT) },
      { key: SectionKey.PROJECTS, label: t(NavKey.PROJECTS) },
      { key: SectionKey.CONTACT, label: t(NavKey.CONTACT) },
    ],
    [t]
  );

  return (
    <>
      {navLinks.map((link) => {
        const isActive = active === link.key;

        const item = (
          <li key={link.key}>
            <button
              onClick={() => {
                scrollTo(link.key);
                setIsOpen?.(false);
              }}
              className={cn(
                'group relative text-lg font-semibold transition-colors',
                isActive
                  ? 'text-nav-active-foreground'
                  : 'text-nav-foreground hover:text-nav-hover-foreground'
              )}
            >
              {link.label}
              <span
                className={cn(
                  'bg-nav-active-foreground absolute -bottom-1 left-0 h-0.5 w-0 transition-[width] duration-300',
                  isActive && 'w-full',
                  !isActive && 'group-hover:w-full'
                )}
              />
            </button>
          </li>
        );

        return renderItem ? renderItem(item) : item;
      })}
    </>
  );
};
