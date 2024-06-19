import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import { EmbededVideo } from "../../components";
import { client } from "../../../client";

import "./MediaReleases.scss";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Release() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'videos']";

    client.fetch(query).then((data) => setVideos(data));
  }, []);
  // console.log(videos);

  return (
    <section id="work" className="app__release">
      <h1 className="app__release-title">Latest Release</h1>
      {videos
        .sort((v1, v2) =>
          v1["_createdAt"] < v2["_createdAt"]
            ? 1
            : v1["_createdAt"] > v2["_createdAt"]
              ? -1
              : 0
        )
        .map((video, index) => (
          <div key={index} className="app__release-item">
            <Section>
              <p>{video.title}</p>
              <EmbededVideo videoID={video.videoID} />
            </Section>
          </div>
        ))}

      <p>RIGHT PERSON WRONG PLACE ALBUM OUT NOW</p>
      <a
        className="app__btn"
        href="https://rm.lnk.to/rightplacewrongperson"
        target="_blank"
      >
        BUY HERE
      </a>
    </section>
  );
}
