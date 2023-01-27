import Banner from "./Baner";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./Loader";
import Image from "next/image";

const PortfolioAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")!.classList.add("loading")
      : document.querySelector("body")!.classList.remove("loading");
  }, [loading]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Banner />
            {!loading && (
              <motion.div
                className="relative w-fit bottom-[7rem] left-1/2 -z-10 container"
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                layoutId="main-image-1"
              >
                {/*@Todo add proper image*/}
                <Image
                  alt="slajder 1"
                  className="relative -translate-x-1/2"
                  src="/assets/portfolio/slajder 1.jpg"
                  width={1600}
                  height={1000}
                />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioAnimation;
