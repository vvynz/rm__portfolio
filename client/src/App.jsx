import { useState } from "react";
import "./App.scss";

import { Navbar, ScrollToTop } from "./components";
import { About, Header, MediaReleases, News, Footer } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <MediaReleases />
      <News />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
