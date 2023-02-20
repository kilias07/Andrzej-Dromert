import { motion } from 'framer-motion';
import Img from 'next/image';
import Link from 'next/link';
import Hero from 'public/assets/Hero.webp';

const HeroSection = () => (
  <div className="container mx-auto my-36 w-full">
    <div className="relative z-10 mt-12">
      <Img src={Hero} alt="title" width="3051" height="1228" />
    </div>
    <motion.div
      className="relative w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* @todo podpiąć link do posta */}
      <Link href="#">
        <div className="absolute inset-y-0 right-4 -top-6 h-16 w-1/2 rounded bg-claretDark p-1 text-right text-backgroundColorLight shadow-2xl sm:-top-12 sm:h-24 md:w-1/3">
          <h2 className="mt-5 text-xs font-light italic sm:mt-11 sm:text-base">
            Nawiasem mówiąc
          </h2>
          <span className="text-xs">zobacz więcej</span>
        </div>
      </Link>
    </motion.div>
  </div>
);

export default HeroSection;
