import React from "react";

//Dependencies
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import App from "../src/App";
import { Discography } from "../src/container";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="discography" element={<Discography />} />
      </Routes>
    </AnimatePresence>
  );
}
