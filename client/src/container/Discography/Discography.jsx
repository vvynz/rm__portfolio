// Dependencies
import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../../client";
import { Link } from "react-router-dom";

// Images & Stylesheets
import { images } from "../../constants";
import "./Discography.scss";

export default function Discography() {
  const [discography, setDiscography] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'discography']";

    client.fetch(query).then((data) => setDiscography(data));
  }, []);
  // console.log(discography);

  return (
    <section className="app__discography">
      <Link to="/" className="nav-link">
        <img src={images.leftArrow} />
      </Link>
      <h1>DISCOGRAPHY</h1>
      <div className="app__discography-wrapper">
        {discography.map((item, index) => (
          <div key={index} className="app__discography-album">
            <h2>{item.title}</h2>
            <img
              className="discography__album-img"
              src={urlFor(item.albumImg)}
              alt={item.albumImg.caption}
            />
            <p>Tracklist:</p>
            <ul>
              {item.tracklist.split(",").map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
