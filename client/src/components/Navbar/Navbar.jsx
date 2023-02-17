//Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Images & Stylesheets
import { images } from "../../constants";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
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
