import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./ScrollToTop.scss";

import { images } from "../../constants";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // button will be displayed after scrolling 500px
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // will stop listening when component is unmounted
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="up-btn"
          onClick={scrollToTop}
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
          exit={{ y: 300, opacity: 0, transition: { duration: 0.7 } }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
        >
          <img src={images.up} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
