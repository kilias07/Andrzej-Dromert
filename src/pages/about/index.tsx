import { dupa, RICHTEXT_OPTIONS } from "../../components/contentfulRichText";
import { GetStaticProps, NextPage } from "next";
import ContentService from "../../lib/contentfulClient";
import { IAboutme, IAboutmeFields, IPosts } from "../../types/contentful";
import ProgressBar from "../../components/animations/ProgrsBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface Props {
  aboutMe: IAboutmeFields;
}

export const getStaticProps: GetStaticProps = async () => {
  const [aboutMe] = await ContentService.instance.getEntriesByType<IAboutme[]>(
    "aboutme"
  );
  return {
    props: {
      aboutMe: aboutMe.fields,
    },
  };
};

const Index: NextPage<Props> = ({ aboutMe }) => {
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
        <div className="mx-auto mt-12 max-w-5xl relative">
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
        <div className="md:w-8/12 mx-auto mb-24">
          {documentToReactComponents(aboutMe.description!, RICHTEXT_OPTIONS)}
        </div>
      </motion.article>
    </>
  );
};

export default Index;
