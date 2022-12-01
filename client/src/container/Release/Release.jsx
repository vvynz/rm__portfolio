import React from "react";

import { EmbededVideo } from "../../components";

import "./Release.scss";

export default function Release() {
  return (
    <section className="app__release">
      <h1 className="app__release-title">Latest Release</h1>
      <p>"Wild Flower" Official Teaser - Out Now</p>
      <EmbededVideo videoID="fYiDCh-GYoE" />
    </section>
  );
}
