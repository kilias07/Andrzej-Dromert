import Gallery from '@/components/blog/GalleryImage';
import components from '@/lib/portableText';
import { client } from '@/lib/sanity.config';
import { postByIdQuery, postBySlugQuery } from '@/lib/sanity.queries';
import { PostFields } from '@/lib/types';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';

interface Props {
  post: PostFields;
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  ctx,
) => {
  const { slug } = ctx.params!;
  const post = await client.fetch(postBySlugQuery, { slug });
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await client.fetch(postByIdQuery)) || [];
  return {
    paths,
    fallback: true,
  };
};
const MainImage = ({ gallery }: { gallery: PostFields['gallery'] }) => {
  const mainImage = gallery?.images.find((image) => image.mainImage)!;
  const imageProps = useNextSanityImage(client, mainImage) as any;
  return (
    <div className="mx-auto max-w-5xl">
      <Img
        {...imageProps}
        alt={mainImage?.asset.altText || mainImage?.asset.originalFilename}
        priority
        placeholder="blur"
        blurDataURL={mainImage?.asset.metadata.lqip}
      />
    </div>
  );
};

const Index: NextPage<Props> = ({ post = null }) => {
  if (!post) return null;
  const { title, body, gallery } = post;

  return (
    <motion.article
      className="container mx-auto h-fit"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mt-20 text-center text-4xl leading-snug md:my-20 md:text-6xl xl:text-9xl xl:leading-poppins-fit">
        {title}
      </h1>
      {gallery?.images.length === 1 ? (
        <MainImage gallery={gallery} />
      ) : (
        <Gallery postImages={gallery?.images} />
      )}
      <div className="mx-auto mb-24 w-10/12">
        <PortableText value={body} components={components} />
      </div>
    </motion.article>
  );
};

export default Index;
