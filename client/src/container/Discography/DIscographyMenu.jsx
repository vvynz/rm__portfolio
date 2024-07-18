import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../../client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { images } from "../../constants";

import "./DiscographyMenu.scss";

export default function DiscographyMenu() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'discography']";

    client.fetch(query).then((data) => setAlbums(data));
  }, []);

  return (
    <motion.section className="app__discography-menu">
      <div className="app__discography-menu-nav">
        <Link to="/">
          <motion.img className="home-link" src={images.leftArrow} />
        </Link>
        <h1>DISCOGRAPHY</h1>
      </div>
      <div className="app__discography-menu-wrapper">
        {albums.map((item, index) => (
          <div className="app__discography-menu-album">
            <img
              className="app__discography-menu-album-img"
              src={urlFor(item.albumImg)}
              alt={item.albumImg.caption}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}