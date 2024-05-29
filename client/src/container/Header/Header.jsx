import React from "react";
import SVGInject from "@iconfu/svg-inject";

import { images } from "../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper";
// Import required Swiper modules

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "./Header.scss";

export default function Header() {
  return (
    <section className="app__header-container">
      {/* <img src={images.cbtm} /> */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        scrollbar={{
          draggable: true,
        }}
      >
        <SwiperSlide>
          <div className="app__header-img">
            <img
              className="RPWP_banner"
              src={images.RPWPBanner}
              alt="RPWP Banner"
            />
          </div>
          <div className="app_header-news">
            <p>"Right Person Wrong Place" out now everywhere!</p>
            <a
              className="app__btn"
              href="https://rm.lnk.to/rightplacewrongperson"
              target="_blank"
            >
              purchase here
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="app__header-img">
            <img
              className="header__banner"
              src={images.indigoHeader}
              alt="Indigo banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="app__header-img">
            <img
              className="header__img"
              src={images.wildflower}
              alt="Wild Flower music video"
            />
            <a
              href="https://www.youtube.com/watch?v=u18be_kRmC0"
              target="_blank"
            >
              <img
                className="app__icon"
                src={images.play}
                alt="play icon"
                onLoad={(e) => SVGInject(e.target)}
              />
            </a>
            <div className="header-caption">
              <p>wildflower</p>
            </div>
          </div>
          <div className="app_header-news">
            <p>Indigo out now</p>
            <a
              className="app__btn"
              href="https://ingrv.es/Indigo"
              target="_blank"
            >
              purchase here
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="app__header-img">
            <img
              className="header__img"
              src={images.indigoLP}
              alt="Indigo LP cover image"
            />
          </div>
          <div className="app_header-news">
            <p>Indigo Vinyl Live Now!</p>
            <a
              className="app__btn"
              href="https://ingrv.es/indigovinyl"
              target="_blank"
            >
              available now
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
