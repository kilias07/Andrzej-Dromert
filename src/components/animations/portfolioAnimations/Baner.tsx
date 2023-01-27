import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { banner, letterAni } from "./animationVariants";
import { array } from "prop-types";

interface BannerRowCenterProps {
  title: string;
  playMarquee?: boolean;
}
interface AnimatedLettersProps {
  title: string | [string];
  disabled?: boolean;
}
interface BannerRow {
  title: string;
}

const bannerRowCenterText = "portfolio";

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div variants={banner}>
      <BannerRowTop title="rysunek" />
      <BannerRowCenter title={bannerRowCenterText} playMarquee={playMarquee} />
      <BannerRowBottom title="rzeźba" />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }: AnimatedLettersProps) => {
  return (
    <motion.span
      className="z-10 px-16 inline-block whitespace-nowrap tracking-tighter relative"
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, i) => (
        <motion.span
          className="text-10xl font-light relative inline-block whitespace-nowrap tracking-tighter"
          variants={letterAni}
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BannerRowTop = ({ title }: BannerRow) => {
  return (
    <div className="overflow-hidden flex items-center w-full">
      <div className="flex justify-center items-center w-1/2 shrink-0">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="flex justify-center items-center w-1/2"
      >
        <p className="w-[22rem] text-3xl text-right">
          Wybrane prace zrealizowane w latach
          <span className="italic block">2014 - 2023</span>
        </p>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }: BannerRow) => {
  return (
    <div className="overflow-hidden flex items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="h-32 w-32 rounded-full bg-backgroundColorTest absolute flex justify-center items-center left-40"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
          className="mx-4 text-2xl"
        >
          scroll
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }: BannerRowCenterProps) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
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
};

export default Banner;
