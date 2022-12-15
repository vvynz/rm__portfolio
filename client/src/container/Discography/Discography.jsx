import React, { useState, useEffect } from "react";

import "./Discography.scss";

import { client } from "../../../client";

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
    </section>
  );
}