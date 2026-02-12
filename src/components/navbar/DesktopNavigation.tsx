'use client';
import { listVariants } from '@/constants/listVariants';
import { NavLinks } from './NavLinks';
import { motion } from 'framer-motion';

export const DesktopNavigation = () => {
  return (
    <div className="hidden md:block">
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="flex items-center md:gap-6 xl:gap-8 2xl:gap-10"
      >
        <NavLinks />
      </motion.ul>
    </div>
  );
};
