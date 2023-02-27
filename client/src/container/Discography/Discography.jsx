// Dependencies
import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../../client";

// Dependencies
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.section
      className="app__discography"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Link to="/" className="nav-link">
        <motion.img
          src={images.leftArrow}
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
        />
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
    </motion.section>
  );
}
