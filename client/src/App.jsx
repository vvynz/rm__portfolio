import { useState } from "react";
import "./App.css";

import { Navbar } from "./components";
import { About, Header } from "./container";
// import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>HELLO</h1>
      <About />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
