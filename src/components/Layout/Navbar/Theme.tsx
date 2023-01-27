import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun, HiDesktopComputer } from "react-icons/hi";
import { useOnClickOutside } from "../../../hooks/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";

type Ref = HTMLDivElement | null;

const animate = {
  closed: {
    opacity: 0,
  },
  opened: {
    opacity: 1,
  },
};

export function Theme() {
  const [mounted, setMounted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const ulRef = useRef<Ref>(null);

  const variant = showDialog ? "opened" : "closed";

  useEffect(() => setMounted(true), []);
  useOnClickOutside(ulRef, () => setShowDialog(false));

  let icon;
  switch (resolvedTheme) {
    case "light":
      icon = <HiOutlineSun className="text-xl" />;
      break;
    case "dark":
      icon = <HiOutlineMoon className="text-xl" />;
      break;
    default:
      icon = <HiDesktopComputer className="text-xl" />;
      break;
  }

  const themeOpt = [
    { name: "light", icon: <HiOutlineSun /> },
    { name: "dark", icon: <HiOutlineMoon /> },
    { name: "system", icon: <HiDesktopComputer /> },
  ];

  if (!mounted) return null;

  return (
    <div ref={ulRef} className="relative mt-1">
      <button
        onClick={() => {
          setShowDialog((prev) => !prev);
        }}
      >
        {icon}
      </button>
      <AnimatePresence>
        {showDialog && (
          <motion.ul
            initial="closed"
            animate={variant}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-8 -left-14 bg-backgroundColorTest shadow-2xl border border-grayLighter dark:bg-grayLight p-2 w-fit rounded-md"
            onClick={() => setShowDialog(false)}
            variants={animate}
            exit="closed"
            key="theme"
          >
            {themeOpt.map((el) => (
              <li
                key={el.name}
                onClick={() => setTheme(el.name)}
                className="flex items-center cursor-pointer hover:opacity-75"
              >
                <span className="text-lg mr-1">{el.icon}</span>
                <span>{el.name}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
