import React from "react";

import "./Article.scss";

export default function Article({ title, link, excerpt }) {
  return (
    <div className="app__article">
      <h1>{title}</h1>
      <a href={link} target="_blank">
        Read Here
      </a>
      <p>{excerpt}</p>
    </div>
  );
}
