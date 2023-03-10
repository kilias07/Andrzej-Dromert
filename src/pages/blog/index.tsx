import { stagger } from '@/components/animations/blogAnimation';
import { client } from '@/lib/sanity.config';
import { PostsQuery } from '@/lib/sanity.queries';
import { PostFields } from '@/lib/types';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import BlogCard from '../../components/blog/BlogCard';
import SearchPosts from '../../components/blog/searchPosts';

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch<PostFields[]>(PostsQuery);
  const posts = data.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const LackOfResults = () => (
  <div className="flex min-h-[50vh] w-full items-center justify-center">
    <h1 className="text-2xl">Brak wyników</h1>
  </div>
);

const NoResults = () => (
  <div className="flex min-h-[50vh] w-full items-center justify-center">
    <h1 className="text-2xl">Jeszcze nie ma żadnych postów</h1>
  </div>
);

const Blog: NextPage<{ posts: PostFields[] }> = ({ posts }) => {
  posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  const [searchPosts, setSearchPosts] = useState<PostFields[]>(posts);
  const searchItem = (query: string) => {
    if (!query) {
      setSearchPosts(posts);
      return;
    }
    const fuse = new Fuse(posts, {
      keys: ['title', 'categories.name.current', 'publishedAt'],
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

  if (!posts) return null;
  if (posts.length === 0) return <NoResults />;

  return (
    <>
      <Head>
        <title>Andrzej Dromert - Blog</title>
        <meta property={'og:title'} content={'blog'} />
      </Head>
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
    </>
  );
};

export default Blog;
