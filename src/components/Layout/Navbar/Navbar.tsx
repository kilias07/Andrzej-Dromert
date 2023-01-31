import { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useTransform } from 'framer-motion';
import useBoundedScroll from '@/hooks/useBoundedScroll';
import useOnClickOutside from '../../../hooks/useClickOutside';
import { menuItems } from './menuItems';
import Theme from './Theme';
import { Logo } from './Logo';
import MenuButton from './MenuButtons';

type Ref = HTMLElement | null;

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
        <div className="h-[100px]">
            <motion.nav
                ref={refNavbar}
                className="z-50 fixed inset-0 top-0 bg-backgroundColorTest shadow-bottom"
                style={{
                  height: useTransform(
                    scrollYBoundedProgressThrottled,
                    [0, 1],
                    [100, 50],
                  ),
                }}
            >
                <div className="relative flex items-center justify-between container mx-auto">
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
                            className="lg:text-2xl font-lato"
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
                        <Theme/>
                        <span className="border-r border-grayLighter w-1 h-4 mx-4"/>
                        <button
                            className="cursor-pointer my-1 outline-none focus:outline-none ml-1"
                            type="button"
                            aria-label="menu"
                            onClick={openCloseHamburger}
                        >
                            <MenuButton isModalOpen={isModalOpen}/>
                        </button>
                    </div>

                    <ul className="hidden lg:flex items-center gap-2">
                        {menuItems.map((item) => (
                            <li key={item.title}>
                                <Link
                                    href={item.link}
                                    className="mx-2 text-sm uppercase hover:opacity-75 text-center font-light"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <Theme/>
                    </ul>
                </div>
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.ul
                            className="-z-10 lg:hidden relative flex flex-col bg-backgroundColorTest dark:bg-grayLight gap-5 py-3"
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
            </motion.nav>
        </div>
  );
};

export default Navbar;
