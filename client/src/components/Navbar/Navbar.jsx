import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__logo">
        <img src={images.logo} alt="logo" />
        {/* <p>rm___</p> */}
        {/* <small>just an archive</small> */}
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "news"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
