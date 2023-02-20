import { urlFor } from '@/lib/sanity.config';
import { ImageSanity } from '@/lib/types';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const collapsedAspectRatio = 1 / 2;
const fullAspectRatio = 3 / 2;
const gap = 2;
const margin = 12;

const Gallery: NextPage<{ postImages: ImageSanity[] }> = ({ postImages }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && index + 1 < postImages.length) {
        setIndex(index + 1);
      }
      if (event.key === 'ArrowLeft' && index > 0) {
        setIndex((i) => i - 1);
      }
    };
    window.addEventListener('keydown', eventListener);
    return () => {
      window.removeEventListener('keydown', eventListener);
    };
  }, [index, postImages.length]);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-fit">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {postImages.map((image, i) => (
                <motion.img
                  key={image.asset._id}
                  src={urlFor(image.asset).url()}
                  animate={{ opacity: i === index ? 1 : 0.3 }}
                  className="aspect-[3/2] object-contain"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: 'none' }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index - 1)}
                >
                  <AiOutlineArrowLeft className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < postImages.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: 'none' }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <AiOutlineArrowRight className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="relative inset-x-0 flex justify-center overflow-hidden">
            <motion.div
              initial={false}
              animate={{
                x: `-${
                  index * 100 * (collapsedAspectRatio / fullAspectRatio)
                  + index * gap
                  + margin
                }%`,
              }}
              style={{
                aspectRatio: fullAspectRatio.toString(),
                gap: `${gap}%`,
              }}
              className="flex h-14"
            >
              {postImages.map((image, i) => (
                <motion.button
                  key={image.asset._id}
                  onClick={() => setIndex(i)}
                  whileHover={{ opacity: 1 }}
                  initial={false}
                  animate={i === index ? 'active' : 'inactive'}
                  variants={{
                    active: {
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                      aspectRatio: fullAspectRatio.toString(),
                    },
                    inactive: {
                      marginLeft: '0%',
                      marginRight: '0%',
                      opacity: 0.5,
                      aspectRatio: collapsedAspectRatio.toString(),
                    },
                  }}
                  className="shrink-0"
                >
                  <motion.div className="relative h-full">
                    <Image
                      src={urlFor(image.asset).url()}
                      className="object-cover object-center"
                      fill
                      sizes={'40px'}
                      quality={10}
                      alt={image.asset.altText || image.asset.originalFilename!}
                      placeholder="blur"
                      blurDataURL={image.asset.metadata.lqip}
                    />
                  </motion.div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Gallery;
