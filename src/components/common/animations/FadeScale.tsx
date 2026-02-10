'use client';
import { motion } from 'framer-motion';

export const FadeScale = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className={`w-full  ${className}`}
          >
      {children}
    </motion.div>
  );
};
