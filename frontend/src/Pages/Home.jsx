
import React from "react";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import Slider from "../Component/Slider";
import Volunteer from "./Volunteer";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      

      {/* MAIN CONTENT */}
      <main className="pt-2">
        
        {/* Sections ko proper spacing do */}
        <section className="w-full">
          <Hero />
        </section>

        <section className="w-full">
          <Services />
        </section>

        <section className="w-full">
          <Slider />
        </section>

        <section className="w-full">
          <Volunteer />
        </section>
{/* 
        <section className="w-full">
          <DonateHome />
        </section> */}

        <section className="w-full">
          <Contact />
        </section>

      </main>
    </div>
  );
};

export default Home;