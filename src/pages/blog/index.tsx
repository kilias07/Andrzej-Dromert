import { stagger } from '@/components/animations/blogAnimation';
import { client } from '@/lib/sanity.config';
import { PostsQuery } from '@/lib/sanity.queries';
import { PostFields } from '@/lib/types';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import BlogCard from '../../components/blog/BlogCard';
import SearchPosts from '../../components/blog/searchPosts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.fetch(PostsQuery);

  return {
    props: {
      posts,
    },
  };
};

const LackOfResults = () => (
  <div>
    <h1>Brak wyników</h1>
  </div>
);

const NoResults = () => (
  <div>
    <h1>Jeszcze nie ma żadnych postów</h1>
  </div>
);

const Blog: NextPage<{ posts: PostFields[] }> = ({ posts }) => {
  const [searchPosts, setSearchPosts] = useState<PostFields[]>(posts);
  const searchItem = (query: string) => {
    if (!query) {
      setSearchPosts(posts);
      return;
    }
    const fuse = new Fuse(posts, {
      keys: ['title', 'categories.name.current'],
    });
    const results = fuse.search(query);
    const matches: PostFields[] | null = [];

    if (results.length > 0) {
      results.forEach(({ item }) => {
        matches.push(item);
        setSearchPosts(matches);
      });
    } else {
      setSearchPosts([]);
    }
  };
  if (posts.length === 0) return <NoResults />;

  return (
    <motion.div
      className="heightAdjustScreen container mx-auto flex flex-col items-center lg:flex-row lg:items-start"
      key="blog"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <SearchPosts searchItem={searchItem} />
      {searchPosts.length === 0 ? (
        <LackOfResults />
      ) : (
        <motion.div className="lg:w-3/4" variants={stagger}>
          {searchPosts.map((post) => (
            <BlogCard post={post} key={post._id} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Blog;
