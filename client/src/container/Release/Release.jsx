import React, { useState, useEffect } from "react";

import { EmbededVideo } from "../../components";
import { client } from "../../../client";

import "./Release.scss";

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
            <p>{video.title}</p>
            <EmbededVideo videoID={video.videoID} />
          </div>
        ))}

      <p>INDIGO ALBUM OUT NOW</p>
      <a className="app__btn" href="https://ingrv.es/Indigo" target="_blank">
        BUY HERE
      </a>
    </section>
  );
}
