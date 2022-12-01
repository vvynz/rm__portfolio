import { useState } from "react";
import "./App.scss";

import { Navbar } from "./components";
import { About, Header, Release, Footer} from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Release />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
