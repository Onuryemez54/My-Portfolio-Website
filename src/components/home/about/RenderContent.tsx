'use client';
import { ContentItem } from '@/constants/expertise';
import { listItemVariants, listVariants } from '@/constants/listVariants';
import { TabContentKey } from '@/types/i18n/keys';
import { cn } from '@/utils/cn';
import { isDownloadableCertification } from '@/utils/isDownloadableCertification';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import Link from 'next/link';

export const renderContent = <T extends string>(
  activeKey: T,
  contentMap: Record<T, ContentItem[]>,
  isExpertise?: boolean
) => {
  const t = useTranslations(TabContentKey.TITLE);
  const items = contentMap[activeKey];
  const listClasses = isExpertise
    ? 'grid-cols-1 gap-6'
    : 'grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-3 lg:gap-y-4';

  return (
    <div className="mt-6 flex items-center justify-start md:justify-center">
      <AnimatePresence mode="wait">
        <motion.ul
          key={activeKey}
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={cn(listClasses, 'mt-3 grid items-center')}
          data-testid={`content-${activeKey.toLowerCase()}`}
        >
          {items.map(({ label, icon: Icon }) => {
            const isCertification = isExpertise && isDownloadableCertification(label);
            const href =
              label !== TabContentKey.FREECODECAMP
                ? `/certifications/${label}.pdf`
                : 'https://freecodecamp.org/certification/fcc3c254a94-211e-4039-928f-a1a75e5c0d2d/responsive-web-design';
            return (
              <motion.li
                key={label}
                variants={listItemVariants}
                className="group flex items-center gap-3"
              >
                <Icon className="text-accent-500 group-hover:text-accent-400 translation-all h-4 w-4 duration-200 ease-in group-hover:scale-110 md:h-5 md:w-5 xl:h-6 xl:w-6" />
                <span className="text-primary-300 text-xs font-semibold md:text-sm">
                  {t(label)}
                </span>

                {isCertification && (
                  <Link
                    className="text-primary-500 ml-auto p-2 transition-all duration-200 group-hover:scale-125 group-hover:text-orange-500"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={16} />
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};
