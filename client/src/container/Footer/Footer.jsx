import React from "react";
import SVGInject from "@iconfu/svg-inject";

import { images } from "../../constants";

import "./Footer.scss";

const socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/rkive/",
    icon: `${images.instagram}`,
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs?si=onau8lOzR_2irJh7zRpABA&nd=1",
    icon: `${images.spotify}`,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@HYBELABELS",
    icon: `${images.youtube}`,
  },
];

export default function Footer() {
  return (
    <>
      <div className="app__footer">
        <div className="app__footer-socials">
          <ul className="app__footer-social-links">
            {socials.map((item) => (
              <li key={item.name}>
                <a href={item.link} target="_blank">
                  <img
                    className="social__icons"
                    src={item.icon}
                    alt={item.name}
                    onLoad={(e) => SVGInject(e.target)}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="app__footer-credits">
          <p>© 2022 Big Hit Music / Hybe - Website Design by V.Z.</p>
        </div>
      </div>
    </>
  );
}
