import React from "react";
import SVGInject from "@iconfu/svg-inject";

import { images } from "../../constants";

import "./Header.scss";

export default function Header() {
  return (
    <section className="app__header-container">
      {/* <div className="app__header-img" /> */}
      <div className="app__header-img">
        <img
          className="header__img"
          src={images.wildflower}
          alt="Wild Flower music video"
        />
        <a href="https://www.youtube.com/watch?v=u18be_kRmC0" target="_blank">
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
      {/* <div className="app__header-img">
        <img className="header" src={images.indigoBanner} alt="Indigo banner" />
      </div> */}
      <div className="app_header-news">
        <p>Indigo out now</p>
        <a className="app__btn" href="https://ingrv.es/Indigo" target="_blank">
          order now
        </a>
      </div>
    </section>
  );
}
