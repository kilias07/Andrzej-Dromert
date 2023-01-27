export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const easing = [0.25, 0.25, 0.75, 0.75];

export const fadeInUp = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};
