import { useState } from "react";
import "./App.scss";

import { Navbar } from "./components";
import { About, Header, Release, News, Footer} from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Release />
      {/* <About /> */}
      <News />
      <Footer />
    </div>
  );
}

export default App;
