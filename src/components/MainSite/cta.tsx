import { motion } from 'framer-motion';

const Cta = () => (
  <motion.section
    className="max-w-screen-3xl mx-auto my-20 flex flex-wrap justify-center gap-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="w-[20rem] text-center">
      <div className="relative mx-auto flex h-72 flex-col items-center justify-center">
        <div className="h-28 w-28 rotate-45 bg-cta"></div>
        <div className="absolute top-56 h-14 w-24 border-5 border-black"></div>
      </div>
      <h2 className="flex h-16 items-center justify-center text-2xl">Rzeźba</h2>
      <p className="flex h-20 items-center justify-center">
        przestrzenne autorskie formy wykonane nie tylko w kamieniu
      </p>
    </div>

    <div className="w-[20rem] text-center">
      <div className="relative mx-auto flex h-72 items-center justify-center">
        <div className="relative top-6 h-28 w-28 -translate-y-3 rotate-45 bg-cta"></div>
        <div className="absolute top-12 left-52 h-52 w-12 border-5 border-black"></div>
      </div>
      <h2 className="flex h-16 items-center justify-center text-2xl">
        Kompozycje półprzestrzenne/instalacje
      </h2>
      <p className="flex h-20 items-center justify-center">
        twory niepasujące do kategorii ani po lewej, ani prawej stronie
      </p>
    </div>

    <div className="w-[20rem] text-center">
      <div className="relative mx-auto flex h-72 items-center justify-center">
        <div className="absolute left-26 h-28 w-28 rotate-45 bg-cta"></div>
        <div className="z-10 inline-block h-44 w-44 border-5 border-black"></div>
      </div>
      <h2 className="flex h-16 items-center justify-center text-2xl">
        Realizacje na zamówienie
      </h2>
      <p className="flex h-20 items-center justify-center">
        różności powstałe na zlecenie lub w celach konkursowych
      </p>
    </div>

    <div className="w-[20rem] text-center">
      <div className="relative mx-auto flex h-72 items-center justify-center">
        <div className="absolute left-26 top-20 z-0 h-28 w-28 rotate-45 bg-cta"></div>
        <div className="z-10 inline-block h-64 w-42 border-5 border-black"></div>
      </div>
      <h2 className="flex h-16 items-center justify-center text-2xl">
        Rysunek
      </h2>
      <p className="flex h-20 items-center justify-center">
        Prace wykonane najczęściej na płaszczyźnie, za pomocą własnych technik i
        rozwiązań
      </p>
    </div>
  </motion.section>
);

export default Cta;
