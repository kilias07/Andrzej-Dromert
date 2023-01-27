import { NextPage } from "next";
import { PostImages } from "../../types/PostImages";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const collapsedAspectRatio = 1 / 2;
const fullAspectRatio = 3 / 2;
const gap = 2;
const margin = 12;

export const Gallery: NextPage<{ postImages: PostImages[] }> = ({
  postImages,
}) => {
  let [index, setIndex] = useState(0);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && index + 1 < postImages.length) {
        setIndex(index + 1);
      }
      if (event.key === "ArrowLeft" && index > 0) {
        setIndex((i) => i - 1);
      }
    };
    window.addEventListener("keydown", eventListener);
    return () => {
      window.removeEventListener("keydown", eventListener);
    };
  }, [index]);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-fit">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {postImages.map((image, i) => (
                <motion.img
                  key={image.public_id}
                  src={image.url}
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
                  exit={{ opacity: 0, pointerEvents: "none" }}
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
                  exit={{ opacity: 0, pointerEvents: "none" }}
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
                  index * 100 * (collapsedAspectRatio / fullAspectRatio) +
                  index * gap +
                  margin
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
                  key={image.public_id}
                  onClick={() => setIndex(i)}
                  whileHover={{ opacity: 1 }}
                  initial={false}
                  animate={i === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                      aspectRatio: fullAspectRatio.toString(),
                    },
                    inactive: {
                      marginLeft: "0%",
                      marginRight: "0%",
                      opacity: 0.5,
                      aspectRatio: collapsedAspectRatio.toString(),
                    },
                  }}
                  className="shrink-0"
                >
                  <motion.div className="h-full relative">
                    <Image
                      src={image.url}
                      className="object-cover object-center"
                      fill
                      sizes={`(max-width: 768px) 100vw, 50vw`}
                      quality={20}
                      alt={image.description}
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
