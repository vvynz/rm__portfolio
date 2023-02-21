//Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Images & Stylesheets
import { images } from "../../constants";
import "./Navbar.scss";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__logo">
        <img src={images.logo} alt="logo" />
        {/* <p>rm___</p> */}
        {/* <small>just an archive</small> */}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="app__menu"
            initial={{
              width: 0,
            }}
            animate={{
              width: 300,
              height: 215,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.3 },
            }}
          >
            <motion.ul
              className="app__navbar-links"
              variants={sideVariants}
              initial="closed"
              animate="open"
              // animate={isOpen ? "open" : "closed"}
              exit="closed"
            >
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring" }}
              >
                <Link to="/">home</Link>
              </motion.li>
              {["about", "news"].map((item) => (
                <motion.li
                  key={`link-${item}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring" }}
                >
                  <a href={`#${item}`}>{item}</a>
                </motion.li>
              ))}
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.2}}
                transition={{ type: "spring" }}
              >
                <Link to="discography">discography</Link>
              </motion.li>
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
      <motion.div variants={sideVariants}>
        <motion.button
          className="menu-btn"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <img src={images.xIcon} /> : <img src={images.menu} />}
        </motion.button>
      </motion.div>
    </nav>
  );
}
