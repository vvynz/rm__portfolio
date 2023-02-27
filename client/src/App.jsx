import { useState } from "react";
import "./App.scss";

import { Navbar, ScrollToTop } from "./components";
import { About, Header, MediaReleases, News, Footer } from "./container";

import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="App"
      initial={{
        width: 0,
      }}
      animate={{
        width: "100%",
      }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.1
        }
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
