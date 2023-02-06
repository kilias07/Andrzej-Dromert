import { motion } from 'framer-motion';

const MenuButton = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const variant = isModalOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 50,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -50,
      translateY: -2,
    },
  };

  return (
    <motion.svg
      viewBox="0 0 6 4"
      overflow="visible"
      preserveAspectRatio="none"
      className="h-4 w-7 stroke-black stroke-1 dark:stroke-white"
      vectorEffect="non-scaling-stroke"
      animate={variant}
    >
      <motion.line
        x2="4"
        variants={top}
        initial="closed"
        animate={variant}
        vectorEffect="non-scaling-stroke"
      />
      <motion.line
        x2="4"
        y1="2"
        y2="2"
        variants={center}
        initial="closed"
        animate={variant}
        vectorEffect="non-scaling-stroke"
      />
      <motion.line
        x2="4"
        y1="4"
        y2="4"
        variants={bottom}
        initial="closed"
        animate={variant}
        vectorEffect="non-scaling-stroke"
      />
    </motion.svg>
  );
};

export default MenuButton;
