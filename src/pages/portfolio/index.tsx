import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PortfolioAnimation from "../../components/animations/portfolioAnimations/PortfolioAnimation";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section>
      <div ref={ref}>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

const Portfolio = () => {
  return (
    <>
      <PortfolioAnimation />
      <ul className="h-screen text-7xl font-light flex flex-col justify-center items-center gap-y-16 tracking-wider">
        <li>Rzeźba</li>
        <li>Rysunek</li>
        <li>Grafika</li>
        <li>Zlecenia</li>
      </ul>
    </>
  );
};

export default Portfolio;
