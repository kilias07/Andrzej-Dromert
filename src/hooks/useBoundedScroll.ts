import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
type Clamp = (number: number, min: number, max: number) => number;

export function useBoundedScroll(bounds: number) {
  const clamp: Clamp = (number, min, max) =>
    Math.min(Math.max(number, min), max);

  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.onChange((current) => {
      const previous = scrollY.getPrevious();
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}
