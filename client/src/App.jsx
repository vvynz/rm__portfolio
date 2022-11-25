import { useState } from "react";
import "./App.css";

import About from "./container/About/About";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <About />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
