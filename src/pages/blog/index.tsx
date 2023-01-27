import { GetStaticProps, NextPage } from "next";
import ContentService from "../../lib/contentfulClient";
import BlogCard from "../../components/blog/BlogCard";
import SearchPosts from "../../components/blog/searchPosts";
import { motion } from "framer-motion";
import { stagger } from "../../components/animations/blogAnimation";
import { IPosts } from "../../types/contentful";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await ContentService.instance.getEntriesByType<IPosts[]>(
    "posts"
  );

  return {
    props: {
      posts,
    },
  };
};

const Blog: NextPage<{ posts: IPosts[]; test: any }> = ({ posts, test }) => {
  return (
    <motion.div
      className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start"
      key="blog"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <SearchPosts />
      <motion.div className="lg:w-3/4" variants={stagger}>
        {posts.map((post) => (
          <BlogCard post={post} key={post.sys.id} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
