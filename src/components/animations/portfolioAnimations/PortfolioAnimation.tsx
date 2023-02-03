import { client } from '@/lib/sanity.config';
import { PortfolioAnimationData } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Banner from './Baner';
import Loader from './Loader';

const PortfolioAnimation = ({
  portfolioAnimationData,
}: {
  portfolioAnimationData: PortfolioAnimationData;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(
    () => (loading
      ? document.querySelector('body')!.classList.add('loading')
      : document.querySelector('body')!.classList.remove('loading')),
    [loading],
  );

  const { mainImageAnimation } = portfolioAnimationData.animationImages;
  const mainImgProp = useNextSanityImage(client, mainImageAnimation);

  return (
    <div className="min-h-[36rem] overflow-x-hidden lg:min-h-screen">
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
            <Banner portfolioAnimationLabels={portfolioAnimationData.labels} />
            {!loading && (
              <motion.div
                className="container relative -top-8 left-1/2 -z-10 w-fit lg:-top-16"
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
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
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioAnimation;
