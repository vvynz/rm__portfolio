import React from "react";

import "./News.scss";

import { Article } from "../../components";

const articles = [
  {
    title: "BTS Leader RM Pushes Against the Weight of Fame, Looks Towards a Bright Future on 'Indigo'",
    link: "https://www.rollingstone.com/music/music-album-reviews/review-rm-indigo-1234638839/"
  },
  {
    title: "BTS’ RM on His ‘Indigo’ Album, Duets With Erykah Badu and Anderson .Paak, Military Service and Why Solo Careers Will Bolster the Band",
    link: "https://variety.com/2022/music/news/bts-rm-indigo-solo-album-erykah-badu-anderson-paak-military-wildflower-band-1235447669/"
  },
  {
    title: "RM of BTS: “My whole twenties were an exhibition… but I chose to be a star”",
    link: "https://www.nme.com/features/music-features/bts-rm-interview-indigo-3356430"
  },
  {
    title: "With Indigo, RM Makes Fleeting Moments Feel Permanent",
    link: "https://consequence.net/2022/12/rm-indigo-review-bts-album-analysis/",
    excerpt: "Indigo contains many things — an artist expressing the frustrations of a uniquely isolating chapter of life, creative catharsis, room for experimentation, poignant unraveling of heartbreak and hope. Most of all, though, it’s a record from a writer at the very top of his game who has proven that he still has so far to go and so much to share. RM paints with brushstrokes of his own that are never broad, and always intentional"
  },
  {
    title: "RM OF BTS IS EMBRACING THE SILENCE",
    link: "https://www.theatlantic.com/culture/archive/2022/12/rm-bts-indigo-album/672307/"
  },
]
export default function News() {
  return (
    <section className="app__news-container">
      <h1>The Latest</h1>
      {articles.map((article) => (
        <Article title={article.title} link={article.link} excerpt={article.excerpt} />
      ))}
    </section>
  );
}