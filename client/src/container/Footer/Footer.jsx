import React from "react";

import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="app__footer">
        <div className="app__footer-socials">
          <ul className="app__footer-social-links">
            {["Instagram", "Twitter", "Spotify", "Youtube"].map((item) => (
              <li key={item}>
                <a href="/" target="_blank">
                  <img src="/" alt={item} />
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
