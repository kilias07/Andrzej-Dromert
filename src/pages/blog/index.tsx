import { stagger } from '@/components/animations/blogAnimation';
import { client } from '@/lib/sanity.config';
import { PostFields } from '@/lib/types';
import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import BlogCard from '../../components/blog/BlogCard';
import SearchPosts from '../../components/blog/searchPosts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.fetch(
    `*[_type == "post"] {
    ...,
    categories[] ->{title},
    gallery {
    images[] {
      ...,
      asset->,
    }
    },
    slug,
    title
    }`,
  );

  return {
    props: {
      posts,
    },
  };
};

const Blog: NextPage<{ posts: PostFields[] }> = ({ posts }) => (
  <motion.div
    className="container mx-auto flex flex-col items-center lg:flex-row lg:items-start"
    key="blog"
    exit={{ opacity: 0 }}
    initial="initial"
    animate="animate"
  >
    <SearchPosts />
    <motion.div className="lg:w-3/4" variants={stagger}>
      {posts.map((post) => (
        <BlogCard post={post} key={post._id} />
      ))}
    </motion.div>
  </motion.div>
);

export default Blog;
