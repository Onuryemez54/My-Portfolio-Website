'use client';
import { motion } from 'framer-motion';
import { tabItemVariants, listVariants } from '@/constants/listVariants';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { TabsKey } from '@/types/i18n/keys';

interface TabListProps<T> {
  tabs: { key: T }[];
  activeTab: T;
  onChange: (key: T) => void;
}

export const TabList = <T extends string>({ tabs, activeTab, onChange }: TabListProps<T>) => {
  const t = useTranslations(TabsKey.TITLE);
  const translatedTabs = tabs.map((tab) => ({
    key: tab.key,
    label: t(tab.key as TabsKey),
  }));
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 2xl:gap-6"
    >
      {translatedTabs.map((tab, index) => {
        const isActive = activeTab === tab.key;

        return (
          <motion.li key={String(tab.key)} variants={tabItemVariants} className="flex items-center">
            <button
              onClick={() => onChange(tab.key)}
              className={`group font-body relative py-1 text-sm font-semibold transition-all duration-300 md:text-base 2xl:text-lg ${
                isActive ? 'text-nav-active-foreground' : 'text-nav-foreground'
              }`}
            >
              <span
                className={cn(
                  'inline-block transition-transform duration-300',
                  !isActive && 'group-hover:-translate-y-1'
                )}
              >
                {tab.label}
              </span>

              <span
                className={cn(
                  'bg-nav-active-foreground absolute -bottom-1 left-0 h-0.5 w-0 transition-[width] duration-300',
                  isActive && 'w-full',
                  !isActive && 'group-hover:w-full'
                )}
              />
            </button>

            {index < tabs.length - 1 && <span className="bg-primary-500/60 ml-3 h-5 w-px" />}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
