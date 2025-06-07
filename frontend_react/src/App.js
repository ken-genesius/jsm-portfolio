import React from "react";
import "./App.scss";
import {
  About,
  Contact,
  Experience,
  Header,
  Portfolio,
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
      <Portfolio />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
