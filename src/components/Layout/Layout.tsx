import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

interface Children {
  children: JSX.Element;
}

const Layout = ({ children }: Children) => (
    <>
        <Navbar/>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer/>
    </>
);

export default Layout;
