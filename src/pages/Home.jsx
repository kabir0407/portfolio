import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
