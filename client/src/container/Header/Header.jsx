import React from "react";

import { images } from "../../constants";

import "./Header.scss";

export default function Header() {
  return (
    <section className="app__header-container">
      {/* <div className="app__header-img" /> */}
      <div className="app__header-img">
      <img src={images.wildflower} alt="Wild Flower music video" />
      </div>
      <div className="app_header-news">
        <p>INDIGO OUT DEC 2</p>
        <a className="app__btn" href="https://ingrv.es/Indigo" target="_blank">
          PRE-ORDER NOW
        </a>
      </div>
    </section>
  );
}
