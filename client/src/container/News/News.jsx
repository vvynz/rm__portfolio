import React, { useState, useEffect } from "react";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "./News.scss";

import { Article, Carousel } from "../../components";
import { urlFor, client } from "../../../client";

const articles = [
  {
    id: 1,
    title:
      "BTS Leader RM Pushes Against the Weight of Fame, Looks Towards a Bright Future on 'Indigo'",
    link: "https://www.rollingstone.com/music/music-album-reviews/review-rm-indigo-1234638839/",
  },
  {
    id: 2,
    title:
      "BTS’ RM on His ‘Indigo’ Album, Duets With Erykah Badu and Anderson .Paak, Military Service and Why Solo Careers Will Bolster the Band",
    link: "https://variety.com/2022/music/news/bts-rm-indigo-solo-album-erykah-badu-anderson-paak-military-wildflower-band-1235447669/",
  },
  {
    id: 3,
    title:
      "RM of BTS: “My whole twenties were an exhibition… but I chose to be a star”",
    link: "https://www.nme.com/features/music-features/bts-rm-interview-indigo-3356430",
  },
  {
    id: 4,
    title: "With Indigo, RM Makes Fleeting Moments Feel Permanent",
    link: "https://consequence.net/2022/12/rm-indigo-review-bts-album-analysis/",
    excerpt:
      "Indigo contains many things — an artist expressing the frustrations of a uniquely isolating chapter of life, creative catharsis, room for experimentation, poignant unraveling of heartbreak and hope. Most of all, though, it’s a record from a writer at the very top of his game who has proven that he still has so far to go and so much to share. RM paints with brushstrokes of his own that are never broad, and always intentional",
  },
  {
    id: 5,
    title: "RM OF BTS IS EMBRACING THE SILENCE",
    link: "https://www.theatlantic.com/culture/archive/2022/12/rm-bts-indigo-album/672307/",
  },
  {
    id: 6,
    title:
      "'It Documents My Growth as an Artist and a Person': RM on Creativity, Collaboration, and His First Solo Album",
    link: "https://www.vogue.com/article/rm-bts-indigo-interview",
    excerpt:
      "“Indigo still explores my emotions and learnings through my experiences.” The shift toward a more intimate kind of storytelling is something he hopes will resonate with listeners. “It’s more open in a way people can easily relate to”",
  },
];
export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'articles']";

    client.fetch(query).then((data) => setArticles(data));
  }, []);
  console.log(articles);

  return (
    <section id="news" className="app__news-container">
      <h1 className="app__news-container-title">News</h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
        {articles.map((article, index) => (
          <SwiperSlide className="swiperSlide" key={index}>
            <Article
              key={index}
              title={article.title}
              link={article.link}
              excerpt={article.excerpt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
