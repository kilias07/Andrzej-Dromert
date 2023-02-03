import PortfolioAnimation from '@/components/animations/portfolioAnimations/PortfolioAnimation';
import { client } from '@/lib/sanity.config';
import { portfolioAnimationQuery } from '@/lib/sanity.queries';
import { PortfolioAnimationData } from '@/lib/types';
import { GetStaticProps, NextPage } from 'next';

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
  const portfolioAnimationData = await client.fetch(portfolioAnimationQuery);

  return {
    props: {
      portfolioAnimationData,
    },
  };
};

const Portfolio: NextPage<{
  portfolioAnimationData: PortfolioAnimationData;
}> = ({ portfolioAnimationData }) => (
  <>
    <PortfolioAnimation portfolioAnimationData={portfolioAnimationData} />
    <ul className="my-[10rem] flex flex-col items-center justify-center gap-y-16 text-4xl font-light tracking-wider lg:my-[20rem] lg:text-7xl">
      <li>Rzeźba</li>
      <li>Rysunek</li>
      <li>Grafika</li>
      <li>Zlecenia</li>
    </ul>
  </>
);

export default Portfolio;
