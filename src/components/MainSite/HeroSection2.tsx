import Image from 'next/image';
import Logo from '../Layout/Navbar/Logo';

const HeroSection2 = () => (
  <section className="max-w-screen-3xl mx-auto">
    <div className="flex w-full items-center justify-between">
      <div className="relative left-[3vw] w-1/2 lg:left-[4vw]">
        <div className="flex items-center">
          <div className="relative h-fit w-7 lg:w-12">
            <Logo />
          </div>
          <div className="mt-10 flex flex-col items-end">
            <h1 className="ml-1 w-36 font-lato text-sm font-bold uppercase sm:w-auto sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Andrzej Dromert
            </h1>
            <p className="mr-3 mb-2 mt-1 w-32 text-right text-xs sm:mr-1 lg:w-44 lg:text-xl">
              Rzeźba Rysunek
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-2/3 sm:w-1/2">
        <Image
          src="/assets/Heroimage test.webp"
          alt="title"
          priority
          width="1347"
          height="959"
        />
      </div>
    </div>
    <div className="h-1 w-6/12 bg-claretDark"></div>
  </section>
);

export default HeroSection2;
