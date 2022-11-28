import React from "react";

import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="app__footer">
        <div>
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
        <div>
          
        </div>
      </div>
    </>
  );
}
