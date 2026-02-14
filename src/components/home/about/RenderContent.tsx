import { ContentItem } from '@/constants/expertise';
import { listVariants, tabItemVariants } from '@/constants/listVariants';
import { AnimatePresence, motion } from 'framer-motion';

export const renderContent = <T extends string>(
  activeKey: T,
  contentMap: Record<T, ContentItem[]>
) => {
  const items = contentMap[activeKey];

  return (
    <div className="mt-6 min-h-30">
      <AnimatePresence mode="wait">
        <motion.ul
          key={activeKey}
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {items.map(({ label, icon: Icon }) => (
            <motion.li
              key={label}
              variants={tabItemVariants}
              className="bg-primary/5 border-primary/20 flex items-center gap-2 rounded-xl border px-4 py-2 text-sm"
            >
              <Icon size={16} className="text-primary" />
              <span>{label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};
