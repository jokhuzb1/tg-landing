import { motion, useCycle } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { useDimensions } from "./useDimensions";

// Motion Variants for Sidebar
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// Menu Items Data
const itemIds = [
  { name: "Функции", section: "features" },
  { name: "ИИ", section: "ai" },
  { name: "Улучшение JPG", section: "improveQuality" },
  { name: "Фильмы", section: "searchMovie" },
  { name: "Песни", section: "searchSimilarSongs" },
  { name: "Жанры", section: "identifyGenre" },
  { name: "FAQ", section: "faq" },
];

// Menu Item Component
export const MenuItem = ({ i, scrollToSection, toggle }) => (
  <motion.li
    className="p-4 border-b border-gray-700 cursor-pointer"
    variants={{
      open: {
        y: 0,
        opacity: 1,
        transition: { y: { stiffness: 1000, velocity: -100 } },
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: { y: { stiffness: 1000 } },
      },
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      scrollToSection(i.section);
      toggle();
    }}
  >
    {i.name}
  </motion.li>
);

// Navigation Component
export const Navigation = ({ scrollToSection, isMounted, toggle }) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.ul
      variants={variants}
      className={`fixed top-[80px] right-0 w-full h-[100vh] ${
        !isMounted
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      } transition-opacity bg-white  overflow-hidden`}
    >
      {itemIds.map((i, idx) => (
        <MenuItem
          key={idx}
          i={i}
          scrollToSection={scrollToSection}
          toggle={toggle}
        />
      ))}
    </motion.ul>
  );
};

// Toggle Button for Mobile Menu
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    aria-label="Toggle Menu"
    className="absolute top-[50%] -translate-y-[50%] right-4 z-20"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

// Navbar Component
const Navbar = ({ scrollToSection }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isMounted, setIsMounted] = useState(false); // Tracks if the sidebar should be rendered

  // When the menu is opened, mount the sidebar; when closed, unmount it after animation
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 800); // Wait for animation to finish
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-[rgba(255, 255, 255, 0)] backdrop-blur-[21px] backdrop-saturate-[138%]  z-50">
      <div className="flex justify-between items-center gap-4 py-4 px-3 lg:px-12 max-w-[1380px] mx-auto">
        <div
          className="text-xl font-bold flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("headSection")}
        >
          <img
            src={logo}
            alt="logo"
            height={36}
            width={36}
            className="rounded-full"
          />
          TopMusicBot
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2  lg:gap-6 w-full justify-end">
          {itemIds.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
            >
              {item.name}
            </button>
          ))}
          <a href="https://t.me/Youtu2018bot" className="block bg-[#0F172A] text-white py-2 px-4 rounded-md">
            Telegram Bot
          </a>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="md:hidden relative"
        >
          {/* Conditionally Render Background and Menu */}
          {isMounted && (
            <motion.div
              className="absolute top-0 right-0 w-full h-full z-10 bg-gray-800"
              variants={sidebarVariants}
            />
          )}
          <Navigation
            scrollToSection={scrollToSection}
            isMounted={isMounted}
            toggle={() => toggleOpen()}
          />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </nav>
  );
};

export default Navbar;
