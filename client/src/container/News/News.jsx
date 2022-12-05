import React from "react";

import "./News.scss"

import { Article } from "../../components";

export default function News() {
  return (
    <section className="app__news-container">
      <h1>The Latest</h1>
      <div>
        "RS - Indigo is an adventurous sonic portrait of BTS' RM's inner world"
        <a href="https://www.rollingstone.com/music/music-album-reviews/review-rm-indigo-1234638839/" target="_blank"> Read Here</a>
        <Article />
      </div>
    </section>
  );
}
