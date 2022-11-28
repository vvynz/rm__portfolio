import React from "react";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__logo">
        <p>rm___</p>
        <small>just an archive</small>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
