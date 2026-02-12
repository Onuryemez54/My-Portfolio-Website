export const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};
