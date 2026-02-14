'use client';
import { motion } from 'framer-motion';

export const FadeRightToLeft = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
