import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { container, item, itemMain } from "./animationVariants";

const Loader = ({ setLoading }: { setLoading: any }) => {
  return (
    <motion.div>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div
          className="absolute left-1/2"
          variants={itemMain}
          layoutId="main-image-1"
        >
          <Image
            src="/assets/portfolio/slajder 1.jpg"
            alt="slajder1"
            width={1200}
            height={800}
            className="relative -translate-x-1/2"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </motion.div>
  );
};

interface ImageBlockProps {
  variants: Variants;
  id: string;
}

export const ImageBlock = ({ variants, id }: ImageBlockProps) => {
  return (
    <motion.div id={id} variants={variants} className="absolute w-48">
      <Image
        src="/assets/portfolio/slajder 4.jpg"
        alt="slajder4"
        width={800}
        height={500}
      />
    </motion.div>
  );
};

export default Loader;
