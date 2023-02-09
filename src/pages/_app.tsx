import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import { Poppins } from '@next/font/google';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Andrzej Dromert</title>
      </Head>
      <>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
        <MotionConfig reducedMotion="user">
          <ThemeProvider attribute="class">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </MotionConfig>
      </>
    </>
  );
}
