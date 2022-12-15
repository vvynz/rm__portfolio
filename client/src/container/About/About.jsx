import React, { useState, useEffect } from "react";

import "./About.scss";

import { client } from "../../../client";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'about']";

    client.fetch(query).then((data) => setAbout(data));
  }, []);
  // console.log(about);

  return (
    <section className="app__about">
      {about.map((i, index) => (
        <>
          <p key={index}>{i.about.split(". ")[0]}.</p>
          <p key={index}>{i.about.split(". ")[1]}.</p>
        </>
      ))}
    </section>
  );
}
