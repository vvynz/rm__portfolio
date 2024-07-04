import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../../client";

import { motion } from "framer-motion";

export default function DiscographyMenu() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'discography']";

    client.fetch(query).then((data) => setAlbums(data));
  }, []);
  return (
    <motion.section>
      <h1>DISCOGRAPHY</h1>
      <div className="app__discography-menu-wrapper">
        {albums.map((item, index) => (
          <div key={index}>
            <img src={urlFor(item.albumImg)} alt={item.albumImg.caption} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
