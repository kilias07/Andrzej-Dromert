import { AboutFields } from '@/lib/types';
import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import ProgressBar from '../../components/animations/ProgrsBar';

interface Props {
  aboutMe: AboutFields;
}

export const getStaticProps: GetStaticProps = async () => {
  const [aboutMe] = await ContentService.instance.getEntriesByType<IAboutme[]>(
    'aboutme',
  );
  return {
    props: {
      aboutMe: aboutMe.fields,
    },
  };
};

const Index: NextPage<Props> = ({ aboutMe }) => (
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
        <Image
          src={aboutMe.featureImage![0].url}
          alt="title"
          priority
          layout="responsive"
          width={aboutMe.featureImage![0].width}
          height={aboutMe.featureImage![0].height}
          objectFit="contain"
        />
      </div>
      <div className="mx-auto mb-24 md:w-8/12">
        {documentToReactComponents(aboutMe.description!, RICHTEXT_OPTIONS)}
      </div>
    </motion.article>
  </>
);

export default Index;
