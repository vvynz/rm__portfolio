import React from "react";
import SVGInject from "@iconfu/svg-inject";

import { images } from "../../constants";
import HeaderUpdates from "./HeaderUpdates";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper";
// Import required Swiper modules

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import "./Header.scss";

export default function Header() {
  return (
    <section className="app__header-container">
      {/* <img className="app__header_main" src={images.RPWPMain} /> */}
      <HeaderUpdates />
    </section>
  );
}
