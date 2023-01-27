import { motion } from "framer-motion";

const Cta = () => {
  return (
    <motion.section
      className="max-w-screen-3xl mx-auto flex justify-center flex-wrap gap-10 my-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-[20rem] text-center">
        <div className="mx-auto flex flex-col justify-center items-center h-72 relative">
          <div className="h-28 w-28 rotate-45 bg-cta"></div>
          <div className="absolute w-24 h-14 top-56 border-5 border-black"></div>
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Rzeźba
        </h3>
        <p className="flex items-center justify-center h-20">
          przestrzenne autorskie formy wykonane nie tylko w kamieniu
        </p>
      </div>

      <div className="w-[20rem] text-center">
        <div className="mx-auto relative h-72 flex items-center justify-center">
          <div className="h-28 w-28 rotate-45 -translate-y-3 bg-cta relative top-6"></div>
          <div className="absolute top-12 left-52 h-52 w-12 border-5 border-black"></div>
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Kompozycje półprzestrzenne/instalacje
        </h3>
        <p className="flex items-center justify-center h-20">
          twory niepasujące do kategorii ani po lewej, ani prawej stronie
        </p>
      </div>

      <div className="w-[20rem] text-center">
        <div className="mx-auto relative h-72 flex items-center justify-center">
          <div className="h-28 w-28 absolute left-26 rotate-45 bg-cta"></div>
          <div className="inline-block w-44 h-44 border-5 border-black z-10"></div>
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Realizacje na zamówienie
        </h3>
        <p className="flex items-center justify-center h-20">
          różności powstałe na zlecenie lub w celach konkursowych
        </p>
      </div>

      <div className="w-[20rem] text-center">
        <div className="relative mx-auto h-72 relative flex items-center justify-center">
          <div className="h-28 w-28 absolute left-26 top-20 rotate-45 bg-cta z-0"></div>
          <div className="inline-block w-42 h-64 border-5 border-black z-10"></div>
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Rysunek
        </h3>
        <p className="flex items-center justify-center h-20">
          Prace wykonane najczęściej na płaszczyźnie, za pomocą własnych technik
          i rozwiązań
        </p>
      </div>
    </motion.section>
  );
};

export default Cta;
