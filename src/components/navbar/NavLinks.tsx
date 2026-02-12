'use client';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { NavKey } from '@/types/i18n/keys';
import { SectionKey } from '@/types/section';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { itemVariants } from '@/constants/listVariants';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface NavLinksProps {
  setIsOpen?: (v: boolean) => void;
}

export const NavLinks = ({ setIsOpen }: NavLinksProps) => {
  const { active, scrollTo } = useActiveSectionContext();
  const t = useTranslations(NavKey.TITLE);

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

        const node = (
          <button
            onClick={() => {
              scrollTo(link.key);
              setIsOpen?.(false);
            }}
            className={cn(
              'group relative transition-all duration-300',
              'text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[22px]',
              'font-semibold',
              isActive ? 'text-nav-active-foreground' : 'text-nav-foreground'
            )}
          >
            <span
              className={cn(
                'inline-block transition-transform duration-300',
                !isActive && 'group-hover:-translate-y-1'
              )}
            >
              {link.label}
            </span>

            <span
              className={cn(
                'bg-nav-active-foreground absolute -bottom-1 left-0 h-0.5 w-0 transition-[width] duration-300',
                isActive && 'w-full',
                !isActive && 'group-hover:w-full'
              )}
            />
          </button>
        );

        return (
          <motion.li key={link.key} variants={itemVariants}>
            {node}
          </motion.li>
        );
      })}
    </>
  );
};
