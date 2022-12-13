import React from "react";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

export default function Carousel() {
  return (
    <>
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}
