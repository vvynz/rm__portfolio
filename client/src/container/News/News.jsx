import React from "react";

import "./News.scss";

import { Article } from "../../components";

const articles = [
  {
    title: "BTS’ RM on His ‘Indigo’ Album, Duets With Erykah Badu and Anderson .Paak, Military Service and Why Solo Careers Will Bolster the Band",
    link: "https://variety.com/2022/music/news/bts-rm-indigo-solo-album-erykah-badu-anderson-paak-military-wildflower-band-1235447669/"
  },
]
export default function News() {
  return (
    <section className="app__news-container">
      <h1>The Latest</h1>
      {articles.map((article) => (
        <Article title={article.title} link={article.link} />
      ))}
    </section>
  );
}
