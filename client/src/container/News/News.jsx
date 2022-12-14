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
              link={article.articleLink}
              excerpt={article.excerpt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
