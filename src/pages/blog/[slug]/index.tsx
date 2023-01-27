import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ContentService from "../../../lib/contentfulClient";
import { IPostsFields } from "../../../types/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from "../../../components/contentfulRichText";
import { Gallery } from "../../../components/blog/GalleryImage";
import { PostImages } from "../../../types/PostImages";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  post: IPostsFields;
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  ctx
) => {
  const { slug } = ctx.params!;
  const post = await ContentService.instance.getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post: post.fields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await ContentService.instance.getEntriesByType<IPostsFields>(
    "posts"
  );
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: false,
  };
};

const Index: NextPage<Props> = ({ post }) => {
  const [test, setTest] = useState("");
  return (
    <motion.article
      className="container mx-auto h-fit"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl xl:text-9xl text-center leading-snug xl:leading-poppins-fit mt-20 md:my-20">
        {post.title}
      </h1>
      {post.postGallery.length === 1 ? (
        <div className="mx-auto max-w-5xl">
          <Image
            src={post.featuredImage[0].url}
            alt="title"
            priority
            layout="responsive"
            width={post.featuredImage[0].width}
            height={post.featuredImage[0].height}
            objectFit="contain"
          />
        </div>
      ) : (
        <Gallery postImages={post.postGallery as PostImages[]} />
      )}
      <div className="w-10/12 mx-auto mb-24">
        {documentToReactComponents(post.postText!, RICHTEXT_OPTIONS)}
      </div>
    </motion.article>
  );
};

export default Index;
