'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './NavLinks';
import { ThemeToggleButton } from './ThemeToggleButton';
import { LocaleSwitcher } from './LocaleSwitcher';
import { BrandLogo } from '../common/BrandLogo';

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
};

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="flex md:hidden">
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="text-nav-foreground hover:bg-primary-800/40 flex items-center justify-center rounded-full p-2 transition"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="bg-primary-900 fixed top-0 right-0 z-50 flex h-full w-[80%] max-w-sm flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="border-primary-700 flex items-center justify-between border-b px-6 py-4">
                <BrandLogo />

                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="hover:bg-primary-800/40 absolute right-4 rounded-full p-2"
                >
                  <X className="text-primary-100 hover:text-accent-400 h-6 w-6" />
                </button>
              </div>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-4 px-6 py-6"
              >
                <NavLinks
                  setIsOpen={setOpen}
                  renderItem={(node) => (
                    <motion.li key={(node as React.ReactElement).key} variants={itemVariants}>
                      {node}
                    </motion.li>
                  )}
                />
              </motion.ul>

              <div className="border-primary-700 mt-auto flex items-center justify-between border-t px-6 py-4">
                <LocaleSwitcher />
                <ThemeToggleButton />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
