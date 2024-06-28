import React, { useEffect, useState } from "react";
import { client, Client, urlFor } from "../../../client";

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
      <div className="app__discography-menu-wrapper"></div>
    </motion.section>
  );
}
