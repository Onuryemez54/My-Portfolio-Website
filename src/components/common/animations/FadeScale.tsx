'use client';
import { motion } from 'framer-motion';

export const FadeScale = ({
  children,
  className,
  delay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      viewport={{ once: true }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
