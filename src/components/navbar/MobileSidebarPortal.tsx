'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { listVariants } from '@/constants/listVariants';
import { NavLinks } from './NavLinks';
import { ThemeToggleButton } from './ThemeToggleButton';
import { LocaleSwitcher } from './LocaleSwitcher';
import { BrandLogo } from '../common/BrandLogo';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export const MobileSidebarPortal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.aside
            className="bg-primary-900 border-primary-700 fixed top-0 right-0 z-50 flex h-full w-[40%] flex-col rounded-l-2xl border-l shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="border-primary-700 flex items-center justify-between border-b px-4 py-2 sm:px-6 sm:py-3">
              <BrandLogo setIsOpen={() => setIsOpen(false)} />

              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-800/40 text-nav-foreground hover:text-accent-500 absolute right-4 cursor-pointer rounded-full p-1 transition-all duration-300 hover:scale-105 sm:p-2"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 p-6 sm:gap-10 sm:p-8"
            >
              <NavLinks setIsOpen={setIsOpen} />
            </motion.ul>

            <div className="border-primary-700 mt-auto flex items-center justify-between border-t px-4 py-2 sm:px-6 sm:py-3">
              <LocaleSwitcher />
              <ThemeToggleButton />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
