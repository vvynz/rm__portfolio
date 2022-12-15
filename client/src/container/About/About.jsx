import React, { useState, useEffect } from "react";

import "./About.scss";

import { client } from "../../../client";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'about']";

    client.fetch(query).then((data) => setAbout(data));
  }, [])
  console.log(about[0].about.split("."))

  return (
    <section className="app__about">
      {/* <p>
        RM of 21st century pop icons BTS, released a new solo album, Indigo on
        Dec 2.
      </p>
      <p>
        Like a diary, Indigo recounts the storiees and experience RM has gone
        through. It is a record of his 20s and a candid introduction of who RM
        truly is.
      </p>
      <p>
        The album comprises of 10 tracks in various genres and with several
        featured artists, including hte lead single "Wild Flower (with
        youjeen)." RM led the overall album making from writing the songs and
        lyrics, developing the concept of the album, designing album art to
        develop the music video.
      </p> */}

      {about.map((item, index) => 
        <p key={index}>{item.about}</p>
      )}
    </section>
  );
}
