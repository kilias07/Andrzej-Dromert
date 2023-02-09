import { client } from '@/lib/sanity.config';
import { PortfolioAnimationData } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { RefObject, useEffect } from 'react';
import Banner from './Baner';
import Loader from './Loader';

// @todo proper typing setLoading and loading
interface PortfolioAnimationProps {
  setLoading: Function;
  loading: boolean;
  portfolioAnimationData: PortfolioAnimationData;
  reference?: RefObject<HTMLUListElement> | null;
}

const PortfolioAnimation = ({
  portfolioAnimationData,
  loading,
  setLoading,
  reference,
}: PortfolioAnimationProps) => {
  useEffect(
    () => (loading
      ? document.querySelector('body')!.classList.add('loading')
      : document.querySelector('body')!.classList.remove('loading')),
    [loading],
  );

  const { mainImageAnimation } = portfolioAnimationData.animationImages;
  const mainImgProp = useNextSanityImage(client, mainImageAnimation);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader
            setLoading={setLoading}
            portfolioAnimationImages={portfolioAnimationData.animationImages}
          />
        </motion.div>
      ) : (
        <>
          <Banner
            portfolioAnimationLabels={portfolioAnimationData.labels}
            reference={reference}
          />
          {!loading && (
            <div className="container relative top-[-2rem] mx-auto flex justify-center lg:top-[-5rem]">
              <motion.div
                className="relative aspect-[4/3] w-full"
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                layoutId="main-image-1"
              >
                <Image
                  {...mainImgProp}
                  priority={true}
                  quality={60}
                  alt={
                    mainImageAnimation.asset.altText
                    || mainImageAnimation.asset.originalFilename!
                  }
                  className="object-contain"
                />
              </motion.div>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioAnimation;
