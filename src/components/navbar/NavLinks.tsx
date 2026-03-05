'use client';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { NavKey } from '@/types/i18n/keys';
import { SectionKey } from '@/types/sectionTypes';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { itemVariants } from '@/constants/listVariants';
import { AnimatedNavButton } from '../ui/AnimatedNavButton';
import { motion } from 'framer-motion';

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

        return (
          <motion.li key={link.key} variants={itemVariants}>
            <AnimatedNavButton
              testId={`link-${link.key}`}
              label={link.label}
              isActive={isActive}
              onClick={() => {
                scrollTo(link.key);
                setIsOpen?.(false);
              }}
            />
          </motion.li>
        );
      })}
    </>
  );
};
