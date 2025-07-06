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
import { Navbar, Footer, Sidebar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <Footer />
      <Header />
      <About />
      {/* <Work /> */}
      <Skills />
      <Experience />
      {/* <Testimonials /> */}
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
