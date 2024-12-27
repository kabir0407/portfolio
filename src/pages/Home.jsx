import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Experience from "../components/Experience";
import Tech from "../components/Tech";
import Works from "../components/Works";
import { StarsCanvas } from "../components/canvas";
import Contact from "../components/Contact";
import Feedbacks from "../components/Feedbacks";

export default function Home() {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
