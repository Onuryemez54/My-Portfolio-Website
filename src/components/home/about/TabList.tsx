'use client';
import { motion } from 'framer-motion';
import { tabItemVariants, listVariants } from '@/constants/listVariants';
import { useTranslations } from 'next-intl';
import { TabsKey } from '@/types/i18n/keys';
import { AnimatedNavButton } from '@/components/ui/AnimatedNavButton';
import { Fragment } from 'react';

interface TabListProps<T> {
  tabs: { key: T; label: TabsKey }[];
  activeTab: T;
  onChange: (key: T) => void;
}

export const TabList = <T extends string>({ tabs, activeTab, onChange }: TabListProps<T>) => {
  const t = useTranslations(TabsKey.TITLE);

  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="flex items-center justify-start gap-2 sm:gap-3 md:justify-center lg:gap-4 2xl:gap-6"
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.key;
        const label = t(tab.label);

        return (
          <Fragment key={String(tab.key)}>
            <motion.li variants={tabItemVariants}>
              <AnimatedNavButton
                testId={`tab-${tab.key.toLowerCase()}`}
                label={label}
                isActive={isActive}
                onClick={() => onChange(tab.key)}
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
