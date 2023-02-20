import useBoundedScroll from '@/hooks/useBoundedScroll';
import { AnimatePresence, motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import useOnClickOutside from '../../../hooks/useClickOutside';
import Logo from './Logo';
import MenuButton from './MenuButtons';
import menuItems from './menuItems';
import Theme from './Theme';

type Ref = HTMLDivElement | null;

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const refNavbar = useRef<Ref>(null);

  const { scrollYBoundedProgress } = useBoundedScroll(200);
  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.5, 1],
    [0, 0, 1],
  );

  useOnClickOutside(refNavbar, () => setModalOpen(false));

  function openCloseHamburger() {
    setModalOpen((prev) => !prev);
  }

  return (
    <nav className="h-[100px]">
      <motion.div
        ref={refNavbar}
        className="shadow-bottom fixed inset-0 z-50 bg-backgroundColorLight dark:bg-backgroundColorDark"
        style={{
          height: useTransform(
            scrollYBoundedProgressThrottled,
            [0, 1],
            [100, 50],
          ),
        }}
      >
        <div className="container relative mx-auto flex items-center justify-between">
          <Link
            className="flex items-center justify-center pl-3"
            href="/"
            passHref
            onClick={() => isModalOpen && setModalOpen(false)}
          >
            <Logo
              style={{
                opacity: useTransform(
                  scrollYBoundedProgressThrottled,
                  [1, 0],
                  [0, 1],
                ),
                height: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [90, 50],
                ),
                marginTop: 2,
              }}
            />
            <motion.span
              className="shrink-0 lg:text-2xl"
              style={{
                scale: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 1.3],
                ),
                fontWeight: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 100],
                  [400, 300],
                ),
                translateX: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [0, -10],
                ),
              }}
            >
              ANDRZEJ DROMERT
            </motion.span>
          </Link>
          <div className="flex items-center lg:hidden">
            <Theme />
            <span className="mx-4 h-4 w-1 border-r border-grayLighter" />
            <button
              className="my-1 ml-1 cursor-pointer outline-none focus:outline-none"
              type="button"
              aria-label="menu"
              onClick={openCloseHamburger}
            >
              <MenuButton isModalOpen={isModalOpen} />
            </button>
          </div>

          <ul className="hidden items-center gap-2 lg:flex">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className="mx-2 text-center text-sm font-light uppercase hover:opacity-75"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <Theme />
          </ul>
        </div>
        <AnimatePresence>
          {isModalOpen && (
            <motion.ul
              className="relative -z-10 flex flex-col gap-5 bg-backgroundColorLight py-3 dark:bg-backgroundColorDark lg:hidden"
              initial={{ translateY: -200, opacity: 0 }}
              animate={{ translateY: -2, opacity: 1 }}
              exit={{ translateY: -200, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              key="box"
            >
              {menuItems.map((item) => (
                <li key={item.title} className="flex justify-center">
                  <Link
                    href={item.link}
                    onClick={openCloseHamburger}
                    className="text-base font-light tracking-normal"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
