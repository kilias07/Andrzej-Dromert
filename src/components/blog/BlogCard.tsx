import { fadeInUp } from '@/components/animations/blogAnimation';
import { Button } from '@/components/Button';
import { client, urlFor } from '@/lib/sanity.config';
import { PostFields } from '@/lib/types';
import { motion } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';

interface Post {
  post: PostFields;
}

const BlogCard = ({ post }: Post) => {
  const {
    title, slug, publishedAt, gallery,
  } = post;
  const mainImage = gallery.images.find((image) => image.mainImage)!;
  const imageProps = useNextSanityImage(client, mainImage);
  return (
    <motion.div
      className="my-8 h-fit max-w-[24rem] overflow-hidden rounded shadow-2xl dark:bg-grayLighter dark:text-primaryColorGray lg:flex lg:max-w-[90%] lg:flex-1"
      variants={fadeInUp}
    >
      {mainImage && (
        <Img
          {...imageProps}
          alt={mainImage.asset.altText || title}
          src={urlFor(mainImage.asset).url()}
          placeholder="blur"
          blurDataURL={mainImage.asset.metadata.lqip}
          width={384}
          height={288}
        />
      )}
      <div className="p-5 lg:basis-3/4">
        <h1 className="my-3 h-20 text-xl font-semibold">{title}</h1>

        {/* @todo Add bpdy body */}
        <p className="h-24">{'placeholder'}</p>
        <div className="flex items-center justify-between">
          <Button link={`blog/${slug.current}`} />
          <p className="text-xs text-grayLighter dark:text-grayLight">
            {new Date(publishedAt).toLocaleDateString('pl-PL')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default BlogCard;
