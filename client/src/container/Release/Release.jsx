import React, { useState, useEffect } from "react";

import { EmbededVideo } from "../../components";
import { client } from "../../../client";

import "./Release.scss";

const releases = [
  {
    id: 1,
    title: '"Wild Flower (with youjeen)" Official MV - Out Now',
    videoID: "u18be_kRmC0",
  },
  {
    id: "2",
    title: '"Still Life (with Anderson .Paak)" Official MV - Out Now',
    videoID: "2vfmL4q2koo",
  },
];

export default function Release() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'videos']";

    client.fetch(query).then((data) => setVideos(data));
  }, []);
  console.log(videos);

  return (
    <section id="work" className="app__release">
      <h1 className="app__release-title">Latest Release</h1>
      {releases.map((item) => (
        <div key={item.id} className="app__release-item">
          <p>{item.title}</p>
          <EmbededVideo videoID={item.videoID} />
        </div>
      ))}

      <p>INDIGO ALBUM OUT NOW</p>
      <a className="app__btn" href="https://ingrv.es/Indigo" target="_blank">
        BUY HERE
      </a>
    </section>
  );
}
