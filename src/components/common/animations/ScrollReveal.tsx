'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect } from 'react';

export const ScrollReveal = ({
  children,
  delay = 0,
  initialY = 20,
  initialScale,
  duration = 0.8,
}: {
  children: ReactNode;
  delay?: number;
  initialY?: number;
  initialScale?: number;
  duration?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: initialY, scale: initialScale || 1 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration, delay },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
