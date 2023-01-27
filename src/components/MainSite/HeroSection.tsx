import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="w-full mx-auto container my-36">
      <div className="relative mt-12 z-10">
        <Image
          src="/assets/Hero.webp"
          alt="title"
          priority
          width="3051"
          height="1228"
        />
      </div>
      <motion.div
        className="relative w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="blog/dupa">
          <div className="absolute inset-y-0 right-4 -top-6 sm:-top-12 w-1/2 md:w-1/3 h-16 sm:h-24 bg-claretDark text-right rounded shadow-2xl text-backgroundColorTest p-1">
            <h2 className="mt-5 sm:mt-11 text-xs sm:text-base font-light italic">
              Nawiasem mówiąc
            </h2>
            <span className="text-xs">zobacz więcej</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};
