import { Variants } from "framer-motion";

//Container of items
export const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

//Small Photo on Portfolio Page Animation
export const item: Variants = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

//Main Photo on Portfolio Page Animation
export const itemMain: Variants = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0, 0.95],
      duration: 1.6,
    },
  },
};

//Letter Animation
export const letterAni: Variants = {
  initial: { y: 400, opacity: 0 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
    opacity: 1,
  },
};

export const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      delay: 0.1,
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
