'use client';
import { motion } from 'framer-motion';

export const FadeUp = ({
  children,
  delay = 0,
  initialY = 24,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  initialY?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      className={`flex justify-center w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
