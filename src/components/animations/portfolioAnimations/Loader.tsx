import { client } from '@/lib/sanity.config';
import { PortfolioAnimationData } from '@/lib/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { motion, Variants } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { container, item, itemMain } from './animationVariants';

interface LoaderProps {
  setLoading: Function;
  portfolioAnimationImages: PortfolioAnimationData['animationImages'];
}

interface ImageBlockProps {
  variants: Variants;
  id: string;
  img: PortfolioAnimationData['animationImages'][keyof PortfolioAnimationData['animationImages']];
}

// Helpers
const UseImgProps = (img: SanityImageSource) => useNextSanityImage(client, img);

export const ImageBlock = ({ variants, id, img }: ImageBlockProps) => {
  UseImgProps(img);
  return (
    <motion.div id={id} variants={variants} className="absolute w-[42%]">
      <Image
        {...UseImgProps(img)}
        quality={70}
        alt={img.asset.altText || img.asset.originalFilename! || 'image'}
      />
    </motion.div>
  );
};

const Loader = ({ setLoading, portfolioAnimationImages }: LoaderProps) => {
  const {
    mainImageAnimation,
    rightBottomImageAnimation,
    rightTopImageAnimation,
    leftTopImageAnimation,
    leftBottomImageAnimation,
  } = portfolioAnimationImages;

  const mainImgProp = UseImgProps(mainImageAnimation);

  return (
    <motion.div>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ImageBlock
          variants={item}
          id="image-1"
          img={leftBottomImageAnimation}
        />
        <motion.div
          className="absolute left-1/2 top-[15rem] w-1/2 sm:top-[19rem] md:top-[22rem] lg:top-[25rem] xl:top-[30rem] 2xl:top-[35rem]"
          variants={itemMain}
          layoutId="main-image-1"
        >
          <Image
            {...mainImgProp}
            alt={
              mainImageAnimation.asset.altText
              || mainImageAnimation.asset.originalFilename!
            }
            className="relative -translate-x-1/2"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" img={leftTopImageAnimation} />
        <ImageBlock
          variants={item}
          id="image-4"
          img={rightBottomImageAnimation}
        />
        <ImageBlock variants={item} id="image-5" img={rightTopImageAnimation} />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
