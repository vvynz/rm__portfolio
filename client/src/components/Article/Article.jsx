import React from "react";

import "./Article.scss";

export default function Article({ title, link, excerpt }) {
  return (
    <div className="app__article">
      <a href={link} target="_blank">
        <h1>{title}</h1>
      </a>
      <p className="article-text">{excerpt}</p>
    </div>
  );
}
