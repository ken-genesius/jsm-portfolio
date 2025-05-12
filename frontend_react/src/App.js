import React from "react";
import "./App.scss";
import {
  About,
  Contact,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
