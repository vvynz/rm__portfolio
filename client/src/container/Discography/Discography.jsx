import React, { useState, useEffect } from "react";

import "./Discography.scss";

import { client, urlFor } from "../../../client";

export default function Discography() {
  const [discography, setDiscography] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'discography']";

    client.fetch(query).then((data) => setDiscography(data));
  }, []);
  console.log(discography);

  return (
    <section className="app__discography">
      <h1>DISCOGRAPHY</h1>
      {discography.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <img src={urlFor(item.albumImg)} alt={item.albumImg.caption} />
          <ul>
            {item.details.split(",").map((track) => 
            <li>{track}</li>
            )}
          </ul>
        </div>
      ))}
    </section>
  );
}
