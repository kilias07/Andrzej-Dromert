import { PortfolioAnimationData } from '@/lib/types';
import { motion } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';
import { banner, letterAni } from './animationVariants';

interface AnimatedLettersProps {
  title: string | [string];
  disabled?: boolean;
}

interface BannerRow {
  title: string;
  description?: string;
  playMarquee?: boolean;
  reference?: RefObject<HTMLUListElement> | null;
}

interface BannerProps {
  portfolioAnimationLabels: PortfolioAnimationData['labels'];
  reference?: RefObject<HTMLUListElement> | null;
}

const AnimatedLetters = ({ title, disabled }: AnimatedLettersProps) => (
  <motion.div
    className="relative z-10 inline-block overflow-hidden whitespace-nowrap px-8 tracking-tighter lg:px-16"
    variants={disabled ? {} : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, i) => (
      <motion.span
        className="lg:text-10xl relative inline-block whitespace-nowrap text-5xl font-light tracking-tighter sm:text-7xl"
        variants={letterAni}
        key={i}
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>
);

const BannerRowTop = ({ title, description }: BannerRow) => (
  <div className="max-w-screen-3xl mx-auto flex w-full items-center">
    <div className="flex w-1/2 items-center justify-center">
      <AnimatedLetters title={title} />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.4,
      }}
      className="flex w-1/2 items-center justify-center"
    >
      <p className="w-[10rem] text-right font-light lg:w-[20rem] lg:text-3xl">
        {description}
      </p>
    </motion.div>
  </div>
);

const BannerRowBottom = ({ title, reference }: BannerRow) => {
  const clickHandler = () => reference?.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="max-w-screen-3xl mx-auto flex items-center overflow-hidden">
      <div className="flex w-1/2 justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className="relative z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-backgroundColorTest lg:h-32 lg:w-32"
          onClick={clickHandler}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 1.8,
            }}
            className="mx-4 dark:text-black lg:text-2xl"
          >
            scroll
          </motion.span>
        </motion.div>
      </div>
      <div className="relative flex w-1/2 justify-center">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }: BannerRow) => (
  <div className={`marquee my-20 lg:my-24 ${playMarquee && 'animate'}`}>
    <motion.div
      initial={{ y: 310 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      className="marquee__inner"
    >
      <AnimatedLetters title={title} disabled />
      <AnimatedLetters title={title} />
      <AnimatedLetters title={title} disabled />
      <AnimatedLetters title={title} disabled />
    </motion.div>
  </div>
);

const Banner = ({ portfolioAnimationLabels, reference }: BannerProps) => {
  const { topLabel, bottomLabel, shortDescription } = portfolioAnimationLabels;
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div variants={banner} className="mt-16 overflow-hidden">
      <BannerRowTop title={topLabel} description={shortDescription} />
      <BannerRowCenter title="portfolio" playMarquee={playMarquee} />
      <BannerRowBottom title={bottomLabel} reference={reference} />
    </motion.div>
  );
};
export default Banner;
