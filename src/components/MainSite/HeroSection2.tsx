import Image from "next/image";
import { Logo } from "../Layout/Navbar/Logo";

export const HeroSection2 = () => {
  return (
    <section className="max-w-screen-3xl mx-auto">
      <div className="w-full flex items-center justify-between">
        <div className="w-1/2 relative left-[3vw] lg:left-[4vw]">
          <div className="flex items-center">
            <div className="h-fit w-7 relative lg:w-12">
              <Logo />
            </div>
            <div className="mt-10 flex flex-col items-end">
              <h1 className="w-36 sm:w-auto font-bold text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-lato uppercase ml-1">
                Andrzej Dromert
              </h1>
              <p className="text-xs w-32 lg:w-44 lg:text-xl text-right mr-3 sm:mr-1 mb-2 mt-1">
                Rzeźba Rysunek
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-2/3 sm:1/2">
          <Image
            src="/assets/Heroimage test.webp"
            alt="title"
            layout="responsive"
            priority
            width="1347"
            height="959"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="w-6/12 h-1 bg-claretDark"></div>
    </section>
  );
};
