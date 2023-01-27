import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";
import { AnimatePresence } from "framer-motion";
import Header from "./Navbar/Header";

interface children {
  children: JSX.Element;
}

export const Layout = ({ children }: children) => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <Footer />
    </>
  );
};
