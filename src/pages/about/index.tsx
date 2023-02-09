import components from '@/lib/portableText';
import { client } from '@/lib/sanity.config';
import { aboutQuery } from '@/lib/sanity.queries';
import { AboutFields } from '@/lib/types';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';
import ProgressBar from '../../components/animations/ProgrsBar';

interface Props {
  aboutMe: AboutFields;
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutMe = await client.fetch(aboutQuery);
  return {
    props: {
      aboutMe,
    },
    revalidate: 10,
  };
};

const Index: NextPage<Props> = ({ aboutMe }) => {
  const { title, image, body } = aboutMe;
  const imageProps = useNextSanityImage(client, image);

  return (
    <>
      <ProgressBar />
      <motion.article
        className="container mx-auto h-fit"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mx-auto mt-12 max-w-5xl">
          <Img {...imageProps} alt={image.asset.altText || title} priority />
        </div>
        <div className="mx-auto mb-24 md:w-8/12">
          <PortableText value={body} components={components} />
        </div>
      </motion.article>
    </>
  );
};

export default Index;
