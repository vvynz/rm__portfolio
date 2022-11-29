import { useState } from "react";
import "./App.scss";

import { Navbar } from "./components";
import { About, Header, Footer} from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
