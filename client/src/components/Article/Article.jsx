import React from "react";

export default function Article({title, link}) {
  return(
    <div>
      <h1>{title}</h1>
        <a href={link} target="_blank"> Read Here</a>
    </div>
  );
}
