import React from "react";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="app__navbar">
      <ul>
        {["home", "about", "work"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
