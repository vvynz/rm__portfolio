import React from "react";

import { images } from "../../constants";
import HeaderUpdates from "./HeaderUpdates";

import "./Header.scss";

export default function Header() {
  return (
    <section className="app__header-container">
      <img className="app__header-hero" src={images.RPWPMain} />
      <HeaderUpdates />
    </section>
  );
}
