import React from "react";

import { EmbededVideo } from "../../components";

import "./Release.scss";

export default function Release() {
  return (
    <section className="app__release">
      <h1 className="app__release-title">Latest Release</h1>
      <p>"Wild Flower (with youjeen)" Official MV - Out Now</p>
      <EmbededVideo videoID="u18be_kRmC0" />

      <p>INDIGO ALBUM OUT NOW</p>
      <a className="app__btn" href="https://ingrv.es/Indigo" target="_blank">
        BUY HERE
      </a>
    </section>
  );
}
