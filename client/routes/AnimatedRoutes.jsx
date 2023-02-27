import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../src/App";
import { Discography } from "../src/container";

export default function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="discography" element={<Discography />} />
    </Routes>
  );
}
