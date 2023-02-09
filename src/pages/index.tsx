import HeroSection from '@/components/MainSite/HeroSection';
import HeroSection2 from '@/components/MainSite/HeroSection2';
import Statement from '@/components/MainSite/Statement';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Cta from '../components/MainSite/cta';

const Home = () => (
  <main>
    <Head>
      <title>Andrzej Dromert - Strona główna</title>
      <meta property={'og:title'} content="Strona główna" />
    </Head>
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
  </main>
);

export default Home;
