import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

interface Children {
  children: JSX.Element;
}

enum CustomColors {
  grayLight = '#666262',
  backgroundColorTest = '#F8F8F7',
}

const Layout = ({ children }: Children) => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={`${
            resolvedTheme === 'dark'
              ? CustomColors.grayLight
              : CustomColors.backgroundColorTest
          }`}
        />
      </Head>
      <>
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </>
    </>
  );
};

export default Layout;
