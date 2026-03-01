'use client';
import Link from 'next/link';
import { contactIcons } from '@/constants/contactIcons';
import { iconListVariants, iconVariants } from '@/constants/listVariants';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

export const AnimatedInfoIcons = () => {
  return (
    <motion.ul
      variants={iconListVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="flex items-center gap-6 sm:gap-8 lg:gap-10 2xl:gap-12"
    >
      {contactIcons.map((icon) => (
        <motion.li key={icon.name} variants={iconVariants}>
          <div className="rounded-full bg-gray-200 p-2 transition-all duration-300 hover:-translate-y-1 hover:scale-110 md:p-2.5 lg:p-3">
            <Link href={icon.url} target="_blank" rel="noopener noreferrer" aria-label={icon.name}>
              <icon.icon className={cn(icon.color, 'h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6')} />
            </Link>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};
