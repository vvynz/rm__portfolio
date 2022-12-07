import React, { useState, useEffect } from "react";

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
    <>
      {isVisible && (
        <button className="up-btn" onClick={scrollToTop}>
          <img src={images.up} />
        </button>
      )}
    </>
  );
}
