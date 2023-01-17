//Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Images & Stylesheets
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
        <li>
          <Link to="/">home</Link>
        </li>
        {["about", "news"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li>
          <Link to="discography">discography</Link>
        </li>
      </ul>
    </nav>
  );
}
