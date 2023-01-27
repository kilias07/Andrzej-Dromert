import { motion } from "framer-motion";
import Image from "next/image";
import { IPosts } from "../../types/contentful";
import { Button } from "../Button";
import { fadeInUp } from "../animations/blogAnimation";

interface Post {
  post: IPosts;
}

const BlogCard = ({ post }: Post) => {
  return (
    <motion.div
      className="max-w-[24rem] lg:max-w-[90%] my-8 rounded h-fit shadow-2xl overflow-hidden lg:flex lg:flex-1 dark:bg-grayLighter dark:text-primaryColorGray"
      variants={fadeInUp}
    >
      <Image
        alt={post.fields.title}
        src={post.fields.featuredImage[0].url}
        width="384"
        height="288"
      />
      <div className="lg:basis-3/4 p-5">
        <h1 className="font-semibold text-xl my-3 h-20">{post.fields.title}</h1>
        <p className="h-24">{post.fields.description}</p>
        <div className="flex items-center justify-between">
          <Button link={`blog/${post.fields.slug}`} />
          <p className="text-grayLighter text-xs dark:text-grayLight">
            {new Date(post.sys.createdAt).toLocaleDateString("pl-PL")}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
