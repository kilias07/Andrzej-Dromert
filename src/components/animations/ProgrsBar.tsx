import { motion, useScroll, useTransform } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scaleX }}
      className="sticky top-[50px] left-0 h-0.5 bg-grayLight origin-[0%]"
    />
  );
};
export default ProgressBar;
