import { client } from '@/lib/sanity.config';
import { categoryQuery, postBySlugQuery } from '@/lib/sanity.queries';
import { CategoryWithSlug, PostFields } from '@/lib/types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import slugify from 'slugify';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.fetch<CategoryWithSlug[]>(categoryQuery);
  const paths = data.map((category) => ({
    params: {
      slug: slugify(category.name, {
        lower: true,
      }),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

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
      slug,
      post,
    },
  };
};

const PortfolioCategory: NextPage<{ slug: string }> = ({ slug }) => (
    <div className="container mx-auto h-screen">
      <h1>tu będzie strona {slug}</h1>
    </div>
);

export default PortfolioCategory;
