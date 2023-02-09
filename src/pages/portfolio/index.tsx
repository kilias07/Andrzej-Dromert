import PortfolioAnimation from '@/components/animations/portfolioAnimations/PortfolioAnimation';
import { client } from '@/lib/sanity.config';
import { categoryQuery, portfolioAnimationQuery } from '@/lib/sanity.queries';
import {
  Categories,
  CategoryWithSlug,
  PortfolioAnimationData,
} from '@/lib/types';
import { motion, useReducedMotion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import slugify from 'slugify';

// function Item() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });
//
//   return (
//     <section>
//       <div ref={ref}>
//         <figure className="progress">
//           <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="30"
//               pathLength="1"
//               className="indicator"
//               style={{ pathLength: scrollYProgress }}
//             />
//           </svg>
//         </figure>
//       </div>
//     </section>
//   );
// }

export const getStaticProps: GetStaticProps = async () => {
  const [portfolioAnimationData, categories] = (await Promise.all([
    client.fetch(portfolioAnimationQuery),
    client.fetch(categoryQuery),
  ])) as [PortfolioAnimationData, Categories[]];

  const categoriesWithSlug = categories.map((category) => ({
    ...category,
    slug: slugify(category.name, {
      lower: true,
    }),
  }));
  return {
    props: {
      portfolioAnimationData,
      categoriesWithSlug,
    },
    revalidate: 10,
  };
};

const Portfolio: NextPage<{
  portfolioAnimationData: PortfolioAnimationData;
  categoriesWithSlug: CategoryWithSlug[];
}> = ({ portfolioAnimationData, categoriesWithSlug }) => {
  const [loading, setLoading] = useState(true);
  const ulRef = useRef<HTMLUListElement>(null);
  const [reduceMotionState, setReduceMotionState] = useState(false);
  const reducedMotion = useReducedMotion();
  useEffect(
    () => (reducedMotion ? setReduceMotionState(true) : setReduceMotionState(false)),
    [reducedMotion],
  );

  if (reduceMotionState) {
    return (
      <div className="min-h-screen">
        <ul className="flex h-screen flex-col items-center justify-center gap-y-16 text-4xl font-light tracking-wider lg:text-7xl">
          {categoriesWithSlug.map((category) => (
            <li key={category._id}>
              <Link href={`portfolio/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Andrzej Dromert - Portfolio</title>
        <meta property={'og:title'} content="Portfolio" />
      </Head>
      <div className="min-h-screen">
        <PortfolioAnimation
          reference={ulRef}
          portfolioAnimationData={portfolioAnimationData}
          setLoading={setLoading}
          loading={loading}
        />
        {!loading && (
          <motion.ul
            ref={ulRef}
            className="flex h-screen flex-col items-center justify-center gap-y-16 text-4xl font-light tracking-wider lg:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {categoriesWithSlug.map((category) => (
              <li key={category._id}>
                <Link href={`portfolio/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </>
  );
};

export default Portfolio;
