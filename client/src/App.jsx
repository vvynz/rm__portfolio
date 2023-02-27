import { useState } from "react";
import "./App.scss";

import { Navbar, ScrollToTop } from "./components";
import { About, Header, MediaReleases, News, Footer } from "./container";

// Dependencies
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="App"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0
      }}
    >
      <Navbar />
      <Header />
      <About />
      <MediaReleases />
      <News />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
