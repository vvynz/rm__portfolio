//Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Images & Stylesheets
import { images } from "../../constants";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="app__navbar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="app__logo">
        <img src={images.logo} alt="logo" />
        {/* <p>rm___</p> */}
        {/* <small>just an archive</small> */}
      </div>

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
        variants={{
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: "spring",
            bounce: 0,
            duration: 0.3,
          },
        }}
        style={{ pointerEvents: isOpen? "auto" : "none"}}
      >
        <motion.li>
          <Link to="/">home</Link>
        </motion.li>
        {["about", "news"].map((item) => (
          <motion.li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
        <motion.li>
          <Link to="discography">discography</Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
