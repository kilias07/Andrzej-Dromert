import HeroSection from '@/components/MainSite/HeroSection';
import HeroSection2 from '@/components/MainSite/HeroSection2';
import Statement from '@/components/MainSite/Statement';
import { Inter } from '@next/font/google';
import { motion } from 'framer-motion';
import type { GetStaticProps, NextPage } from 'next';
import Cta from '../components/MainSite/cta';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  posts: any;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = ['test'];
  return {
    props: {
      posts,
    },
  };
};

const Home: NextPage<Props> = () => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <HeroSection2 />
    <Statement />
    <Cta />
    <HeroSection />
  </motion.div>
);

export default Home;
