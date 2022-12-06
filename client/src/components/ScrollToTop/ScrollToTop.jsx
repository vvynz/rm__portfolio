import React, { useState, useEffect } from "react";

import "./ScrollToTop.scss";

import { images } from "../../constants";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <img className="up-icon" src={images.up} />
    </>
  );
}
