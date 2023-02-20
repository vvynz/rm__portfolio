//Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

// Images & Stylesheets
import { images } from "../../constants";
import "./Navbar.scss";

const variants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      // type: "spring",
      // stiffness: 300,
      // damping: 24,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.nav className="app__navbar">
      <div className="app__logo">
        <img src={images.logo} alt="logo" />
        {/* <p>rm___</p> */}
        {/* <small>just an archive</small> */}
      </div>

      <motion.aside
        initial={{
          width: 0,
        }}
        animate={{
          width: 300,
        }}
      >
        <motion.button
          className="menu-btn"
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
          >
            <img src={images.up} />
          </motion.div>
        </motion.button>
        <motion.ul
          className="app__navbar-links"
          variants={variants}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={variants}>
            <Link to="/">home</Link>
          </motion.li>
          {["about", "news"].map((item) => (
            <motion.li key={`link-${item}`} variants={variants}>
              <a href={`#${item}`}>{item}</a>
            </motion.li>
          ))}
          <motion.li variants={variants}>
            <Link to="discography">discography</Link>
          </motion.li>
        </motion.ul>
      </motion.aside>
    </motion.nav>
  );
}
