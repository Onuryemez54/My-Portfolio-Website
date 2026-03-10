'use client';
import { AnimatedNavButton } from '@/components/ui/AnimatedNavButton';
import { listVariants, tabItemVariants } from '@/constants/listVariants';
import { ProjectFilterKey } from '@/types/i18n/keys';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

interface ProjectFilterTabsProps {
  activeTech: ProjectFilterKey;
  setActiveTech: (tech: ProjectFilterKey) => void;
}
export const ProjectFilterTabs = ({ activeTech, setActiveTech }: ProjectFilterTabsProps) => {
  const t = useTranslations('PROJECT_FILTER');
  const tabs = Object.values(ProjectFilterKey);

  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center gap-1.5 sm:gap-4 lg:gap-5 2xl:gap-6"
    >
      {tabs.map((tech, index) => {
        const isActive = activeTech === tech;
        const isNextJs = tech === ProjectFilterKey.NEXT_JS;
        const isNestJs = tech === ProjectFilterKey.NEST_JS;
        const isReactNative = tech === ProjectFilterKey.REACT_NATIVE;
        const label = isNextJs
          ? 'Next.js'
          : isNestJs
            ? 'NestJS'
            : isReactNative
              ? 'React Native'
              : t(tech);

        return (
          <Fragment key={String(tech)}>
            <motion.li variants={tabItemVariants}>
              <AnimatedNavButton
                testId={`projects-tab-${tech.toLowerCase()}`}
                label={label}
                isActive={isActive}
                onClick={() => setActiveTech(tech)}
                size="tab"
              />
            </motion.li>
            {index < tabs.length - 1 && <span className="bg-primary-500/60 h-5 w-px" />}
          </Fragment>
        );
      })}
    </motion.ul>
  );
};
